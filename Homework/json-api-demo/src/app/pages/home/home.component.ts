// src/app/pages/home/home.component.ts - FRISSÍTVE
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="text-center py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Fő cím animációval -->
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
          Üdvözöllek a <span class="text-blue-600">JSON API Demo</span> alkalmazásban!
        </h1>
        
        <!-- Alcím -->
        <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Ez egy modern Angular alkalmazás, amely bemutatja a REST API integrációt, 
          állapotkezelést és routing-ot Tailwind CSS segítségével.
        </p>
        
        <!-- Kiemelt szolgáltatások -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <!-- 1. Kártya -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 
                      hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">REST API</h3>
            <p class="text-gray-600 mb-6">json-server használata mock API végpontokhoz, teljes CRUD műveletekkel.</p>
            <span class="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              API Integráció
            </span>
          </div>
          
          <!-- 2. Kártya -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 
                      hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Állapotkezelés</h3>
            <p class="text-gray-600 mb-6">Service-ek és BehaviorSubject használata reaktív adatfolyamokhoz.</p>
            <span class="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              RxJS + Services
            </span>
          </div>
          
          <!-- 3. Kártya -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 
                      hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Routing</h3>
            <p class="text-gray-600 mb-6">Paraméteres routing részletes nézetekhez, navigációs státuszkezeléssel.</p>
            <span class="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              Angular Router
            </span>
          </div>
        </div>
        
        <!-- CTA gomb -->
        <div class="mt-16">
          <a routerLink="/items" 
             class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                    text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 
                    transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            <span>Indítsd el a bemutatót</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 1s ease-out;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class HomeComponent {}