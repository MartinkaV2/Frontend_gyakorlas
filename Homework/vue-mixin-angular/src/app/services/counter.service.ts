import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CounterState {
  count: number;
  storageKey: string;
}

@Injectable({
  providedIn: 'root'  // Singleton service
})
export class CounterService {
  private counters = new Map<string, BehaviorSubject<number>>();

  constructor() {
    console.log('CounterService inicializálva');
  }

  // Counter létrehozása vagy lekérése
  getCounter(key: string): Observable<number> {
    if (!this.counters.has(key)) {
      const storageKey = `counter_${key}`;
      const savedValue = localStorage.getItem(storageKey);
      const initialValue = savedValue ? parseInt(savedValue, 10) : 0;
      
      this.counters.set(key, new BehaviorSubject<number>(initialValue));
      console.log(`Counter létrehozva: ${key} = ${initialValue}`);
    }
    
    return this.counters.get(key)!.asObservable();
  }

  // Aktuális érték lekérése
  getValue(key: string): number {
    return this.counters.get(key)?.value || 0;
  }

  // Computed: páros-e
  isEven(key: string): Observable<boolean> {
    return this.getCounter(key).pipe(
      map(count => count % 2 === 0)
    );
  }

  // Computed: kétszerese
  double(key: string): Observable<number> {
    return this.getCounter(key).pipe(
      map(count => count * 2)
    );
  }

  // Műveletek
  increment(key: string): void {
    const counter = this.counters.get(key);
    if (counter) {
      const newValue = counter.value + 1;
      counter.next(newValue);
      this.saveToStorage(key, newValue);
    }
  }

  decrement(key: string): void {
    const counter = this.counters.get(key);
    if (counter) {
      const newValue = counter.value - 1;
      counter.next(newValue);
      this.saveToStorage(key, newValue);
    }
  }

  reset(key: string): void {
    const counter = this.counters.get(key);
    if (counter) {
      counter.next(0);
      this.saveToStorage(key, 0);
    }
  }

  // localStorage mentés
  private saveToStorage(key: string, value: number): void {
    const storageKey = `counter_${key}`;
    localStorage.setItem(storageKey, value.toString());
    console.log(`Mentve: ${storageKey} = ${value}`);
  }

  // Tisztítás (opcionális)
  cleanup(key: string): void {
    const counter = this.counters.get(key);
    if (counter) {
      this.saveToStorage(key, counter.value);
      console.log(`Counter lezárva: ${key}`);
    }
  }
}