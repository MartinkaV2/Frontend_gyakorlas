import { Routes } from '@angular/router';
import { Kapcsolat } from './pages/kapcsolat/kapcsolat';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app').then(m => m.App),
    title: 'Kezdőlap'
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
