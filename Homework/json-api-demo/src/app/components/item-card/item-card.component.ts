import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <!-- Kép -->
      <div class="h-48 overflow-hidden">
        <img 
          [src]="item.image" 
          [alt]="item.title"
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
      </div>
      
      <!-- Tartalom -->
      <div class="p-5">
        <h3 class="text-xl font-bold text-gray-800 mb-2 truncate">
          {{ item.title }}
        </h3>
        
        <p class="text-gray-600 mb-4 line-clamp-2">
          {{ item.description }}
        </p>
        
        <!-- Extra információk - JAVÍTVA -->
        <div class="flex justify-between items-center mb-4">
          <span *ngIf="item.category"
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            {{ item.category }}
          </span>
          <span *ngIf="item.price" class="text-lg font-bold text-green-600">
            {{ item.price | currency:'HUF':'symbol':'1.0-0' }}
          </span>
        </div>
        
        <!-- Részletek gomb -->
        <a 
          [routerLink]="['/items', item.id]"
          class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
          Részletek
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class ItemCardComponent {
  @Input() item!: Item;
}