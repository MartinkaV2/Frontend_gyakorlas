import { Component } from '@angular/core';

@Component({
  selector: 'app-disztribuciok',
  template: `
    <div class="main">
      <h2>Linux Disztribúciók</h2>
      <p>Itt jelennek majd meg a különböző Linux disztribúciók.</p>
    </div>
  `,
  styles: [`
    .main {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class Disztribuciok {}