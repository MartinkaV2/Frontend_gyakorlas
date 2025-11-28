import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './counter-display.html',
  styleUrls: ['./counter-display.css']
})
export class CounterDisplayComponent {}