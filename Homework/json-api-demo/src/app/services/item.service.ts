// src/app/services/item.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsSubject = new BehaviorSubject<Item[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  items$ = this.itemsSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();
  error$ = this.errorSubject.asObservable();

  constructor(private apiService: ApiService) {}

  loadItems(): void {
    console.log('ItemService: loadItems() meghívva'); // DEBUG
    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    this.apiService.getItems().pipe(
      catchError(error => {
        console.error('ItemService hiba:', error); // DEBUG
        this.errorSubject.next(`API hiba: ${error.message}`);
        this.loadingSubject.next(false);
        return throwError(() => error);
      })
    ).subscribe({
      next: (items) => {
        console.log('ItemService: adatok érkeztek:', items); // DEBUG
        this.itemsSubject.next(items);
        this.loadingSubject.next(false);
      },
      error: (error) => {
        console.error('ItemService subscription hiba:', error); // DEBUG
        this.loadingSubject.next(false);
      }
    });
  }

  getItemById(id: string) {
    return this.apiService.getItemById(id);
  }

  getItemFromCache(id: string): Item | undefined {
    return this.itemsSubject.getValue().find(item => item.id === id);
  }
}