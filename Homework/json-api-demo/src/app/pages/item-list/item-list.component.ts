// src/app/pages/item-list/item-list.ts - FRISSÍTVE
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from '../../services/item.service';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Fejléc -->
        <div class="text-center mb-12">
          <div class="inline-block px-6 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            📦 Termékkatalógus
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Elemek <span class="text-blue-600">Listája</span>
          </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Böngéssz a katalógusunkban, és fedezd fel a legjobb termékeket
          </p>
        </div>
        
        <!-- Statisztika sáv -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Betöltési idő</p>
                <p class="text-2xl font-bold text-gray-800">{{ (items$ | async)?.length || 0 }} ms</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">Összes elem</p>
                <p class="text-2xl font-bold text-gray-800">{{ (items$ | async)?.length || 0 }} db</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-500">API állapot</p>
                <p class="text-2xl font-bold text-green-600" *ngIf="!(error$ | async)">Online</p>
                <p class="text-2xl font-bold text-red-600" *ngIf="error$ | async">Hiba</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Betöltés állapota -->
        <div *ngIf="loading$ | async" class="text-center py-20">
          <div class="inline-block animate-spin rounded-full h-20 w-20 border-4 border-blue-600 border-t-transparent mb-6"></div>
          <p class="text-xl text-gray-700 font-medium">Adatok betöltése...</p>
          <p class="text-gray-500 mt-2">Kérjük, várjon amíg az API válaszol</p>
        </div>
        
        <!-- Hiba esetén -->
        <div *ngIf="error$ | async as error" 
             class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-lg p-6 mb-8 shadow-lg">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg class="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-bold text-red-800">API Kapcsolati Hiba</h3>
              <div class="mt-2 text-red-700">
                <p>{{ error }}</p>
                <p class="text-sm mt-2 text-red-600">Ellenőrizze, hogy fut-e a json-server (localhost:3000)</p>
              </div>
              <button 
                (click)="loadItems()"
                class="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 
                       transition-colors shadow-md hover:shadow-lg flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                Újrapróbálkozás
              </button>
            </div>
          </div>
        </div>
        
        <!-- Elemek listája -->
        <div *ngIf="!(loading$ | async) && !(error$ | async)">
          <div *ngIf="(items$ | async)?.length === 0" class="text-center py-20">
            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-700 mb-3">Nincsenek elérhető elemek</h3>
            <p class="text-gray-600 max-w-md mx-auto">
              A katalógus jelenleg üres. Kérjük, próbáld újra később, vagy vegyél fel új elemeket.
            </p>
          </div>
          
          <!-- Kártyák grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-item-card 
              *ngFor="let item of items$ | async"
              [item]="item"
              class="transform transition-all duration-300 hover:scale-[1.03]">
            </app-item-card>
          </div>
        </div>
        
        <!-- Footer info -->
        <div class="mt-12 pt-8 border-t border-gray-200 text-center">
          <p class="text-gray-500 text-sm">
            Adatok forrása: <code class="bg-gray-100 px-2 py-1 rounded text-gray-700">localhost:3000/items</code>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class ItemListComponent implements OnInit {
  items$!: Observable<Item[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private itemService: ItemService) {
    this.items$ = this.itemService.items$;
    this.loading$ = this.itemService.loading$;
    this.error$ = this.itemService.error$;
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.loadItems();
  }
}