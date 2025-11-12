import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    noop(): void {
    // placeholder: később itt navigálhatsz vagy megnyithatsz egy modalt
    console.log('noop clicked');
  }
}
