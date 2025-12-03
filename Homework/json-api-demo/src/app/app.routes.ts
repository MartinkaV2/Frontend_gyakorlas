// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Főoldal' },
  { path: 'items', component: ItemListComponent, title: 'Elemek' },
  { path: 'items/:id', component: ItemDetailComponent, title: 'Elem részletei' },
  { path: '**', redirectTo: '', pathMatch: 'full' } // 404-es route
];