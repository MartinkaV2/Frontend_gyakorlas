// src/app/components/navigation/navigation.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-blue-600 text-white shadow-lg">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-xl font-bold">JSON API Demo</span>
          </div>
          <div class="flex space-x-4">
            <a 
              routerLink="/" 
              routerLinkActive="bg-blue-700" 
              class="px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              [routerLinkActiveOptions]="{ exact: true }">
              Főoldal
            </a>
            <a 
              routerLink="/items" 
              routerLinkActive="bg-blue-700" 
              class="px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Elemek
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavigationComponent {}