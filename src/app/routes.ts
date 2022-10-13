import { Routes } from '@angular/router';
import { TOKEN } from './app.component';

export const routes: Routes = [
  {
    path: 'lazy',
    loadComponent: () => import('./app.component').then((m) => m.LazyComponent),
    providers: [
      {
        provide: TOKEN,
        useValue: 'fromRouteProviders',
      },
    ],
  },
];
