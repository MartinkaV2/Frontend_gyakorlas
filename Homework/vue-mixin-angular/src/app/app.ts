import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterDisplayComponent } from './component/counter-display/counter-display';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterDisplayComponent, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Angular Counter Demo';
}
