import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrls: ['./counter.css']
})
export class CounterComponent implements OnInit, OnDestroy {
  @Input() counterKey!: string;
  @Input() title!: string;

  count$!: Observable<number>;
  isEven$!: Observable<boolean>;
  double$!: Observable<number>;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    // Observables inicializálása
    this.count$ = this.counterService.getCounter(this.counterKey);
    this.isEven$ = this.counterService.isEven(this.counterKey);
    this.double$ = this.counterService.double(this.counterKey);
    
    console.log(`Counter komponens inicializálva: ${this.counterKey}`);
  }

  ngOnDestroy(): void {
    // Mentés localStorage-ba komponens megsemmisítésekor
    this.counterService.cleanup(this.counterKey);
  }

  increment(): void {
    this.counterService.increment(this.counterKey);
  }

  decrement(): void {
    this.counterService.decrement(this.counterKey);
  }

  reset(): void {
    this.counterService.reset(this.counterKey);
  }
}