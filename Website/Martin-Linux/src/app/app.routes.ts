import { Routes } from '@angular/router';
import { Kapcsolat } from './pages/kapcsolat/kapcsolat';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/kezdolap/kezdolap').then(m => m.Kezdolap),
    title: 'Kezdőlap'
  },
  {
    path: 'disztribuciok',
    loadComponent: () => import('./pages/disztribuciok/disztribuciok').then(m => m.Disztribuciok),
    title: 'Disztribúciók'
  },
  {
    path: 'kapcsolat',
    component: Kapcsolat,
    title: 'Kapcsolat'
  },
  {
    path: '**',
    redirectTo: ''
  }
];