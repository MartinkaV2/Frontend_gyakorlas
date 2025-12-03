// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Navigáció -->
      <nav class="bg-blue-600 text-white shadow-lg">
        <div class="container mx-auto px-4 py-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <a routerLink="/" class="text-xl font-bold hover:text-blue-200">
                Angular JSON Demo
              </a>
            </div>
            <div class="flex space-x-4">
              <a 
                routerLink="/" 
                routerLinkActive="bg-blue-700" 
                [routerLinkActiveOptions]="{ exact: true }"
                class="px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
      
      <!-- Fő tartalom -->
      <main class="container mx-auto px-4 py-8">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'json-api-demo';
}