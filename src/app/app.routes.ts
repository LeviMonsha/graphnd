import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'graph',
    loadComponent: () =>
      import('./pages/graph/graph.component').then((m) => m.GraphComponent),
  },
];
