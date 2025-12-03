// src/app/pages/item-detail/item-detail.component.ts - FRISSÍTVE
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Navigációs sáv -->
        <div class="flex justify-between items-center mb-8">
          <button 
            (click)="goBack()"
            class="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 
                   transition-colors shadow-sm hover:shadow-md border border-gray-200">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Vissza a listához
          </button>
          
          <div class="flex items-center space-x-2">
            <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              ID: {{item?.id || '...'}}
            </span>
          </div>
        </div>
        
        <!-- Betöltés -->
        <div *ngIf="loading" class="text-center py-20">
          <div class="inline-block animate-pulse rounded-full h-24 w-24 bg-gradient-to-r from-blue-200 to-blue-300 mb-6"></div>
          <p class="text-xl text-gray-700 font-medium">Adat betöltése...</p>
          <p class="text-gray-500 mt-2">Kérjük, várjon amíg az elem részletei betöltődnek</p>
        </div>
        
        <!-- Hiba -->
        <div *ngIf="error && !loading" 
             class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-lg p-6 mb-8 shadow-lg">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-red-500 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <h3 class="text-lg font-bold text-red-800">Hiba történt</h3>
              <p class="mt-1 text-red-700">{{ error }}</p>
            </div>
          </div>
        </div>
        
        <!-- Elem részletei -->
        <div *ngIf="item && !loading" 
             class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-slide-up">
          <div class="md:flex">
            <!-- Kép rész - Bal oldal -->
            <div class="md:w-2/5 lg:w-2/5 relative">
              <div class="absolute top-4 left-4 z-10">
                <span *ngIf="item.category" 
                      class="px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-700 font-semibold rounded-full 
                             shadow-md text-sm">
                  {{ item.category }}
                </span>
              </div>
              <img 
                [src]="item.image" 
                [alt]="item.title"
                class="w-full h-96 md:h-full object-cover transform transition-transform duration-500 hover:scale-105">
              
              <div class="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div class="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                  <p class="text-sm text-gray-500">Kép azonosító</p>
                  <p class="font-bold text-gray-800">{{ item.id }}</p>
                </div>
              </div>
            </div>
            
            <!-- Tartalom rész - Jobb oldal -->
            <div class="md:w-3/5 lg:w-3/5 p-8 md:p-10">
              <!-- Cím és ár -->
              <div class="mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                  {{ item.title }}
                </h1>
                
                <div *ngIf="item.price" class="flex items-center mb-6">
                  <span class="text-5xl font-bold text-green-600 mr-4">
                    {{ item.price | currency:'HUF':'symbol':'1.0-0' }}
                  </span>
                  <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    ÁFA-val
                  </span>
                </div>
              </div>
              
              <!-- Leírás -->
              <div class="mb-10">
                <div class="flex items-center mb-4">
                  <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <h3 class="text-xl font-bold text-gray-700">Leírás</h3>
                </div>
                <p class="text-gray-700 text-lg leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-100">
                  {{ item.description }}
                </p>
              </div>
              
              <!-- Meta információk -->
              <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                <h3 class="text-xl font-bold text-gray-700 mb-6 flex items-center">
                  <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  Termék információ
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <p class="text-sm text-gray-500 mb-2">Azonosító</p>
                    <p class="text-lg font-bold text-gray-800 flex items-center">
                      <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
                      </svg>
                      {{ item.id }}
                    </p>
                  </div>
                  
                  <div *ngIf="item.category" class="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <p class="text-sm text-gray-500 mb-2">Kategória</p>
                    <p class="text-lg font-bold text-gray-800 flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      </svg>
                      {{ item.category }}
                    </p>
                  </div>
                </div>
                
                <!-- Művelet gombok -->
                <div class="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                  <button 
                    (click)="goBack()"
                    class="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 
                           transition-colors shadow-sm hover:shadow-md border border-gray-300 flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    Vissza
                  </button>
                  
                  <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                                 transition-colors shadow-md hover:shadow-lg flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Kosárba
                  </button>
                  
                  <button class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 
                                 transition-colors shadow-md hover:shadow-lg flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                    Kedvencek
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Hibakezelés: nincs ilyen elem -->
        <div *ngIf="!item && !loading && !error" class="text-center py-20">
          <div class="w-32 h-32 bg-gradient-to-r from-red-100 to-orange-100 rounded-full 
                      flex items-center justify-center mx-auto mb-8 shadow-lg">
            <svg class="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Elem nem található</h3>
          <p class="text-gray-600 text-lg max-w-md mx-auto mb-8">
            A keresett elem nem létezik az adatbázisban. Lehet, hogy törölve lett vagy változott az azonosítója.
          </p>
          <button 
            (click)="goBack()"
            class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                   transition-colors shadow-lg hover:shadow-xl text-lg font-medium inline-flex items-center">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
            </svg>
            Vissza a terméklistához
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-slide-up {
      animation: slideUp 0.5s ease-out;
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  item: Item | null = null;
  loading = true;
  error: string | null = null;
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        this.loading = true;
        this.error = null;
        
        if (!id) {
          this.error = 'Érvénytelen azonosító';
          this.loading = false;
          return [];
        }
        
        const cachedItem = this.itemService.getItemFromCache(id);
        if (cachedItem) {
          this.item = cachedItem;
          this.loading = false;
          return [];
        }
        
        return this.itemService.getItemById(id);
      })
    ).subscribe({
      next: (item) => {
        if (item) {
          this.item = item;
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || 'Hiba történt az adat betöltése közben';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/items']);
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}