import { Route, Routes, UrlSegment } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { HomeComponent } from './home.component';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { first } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canMatch: [
      (route: Route, segments: UrlSegment[]) =>
        inject(AuthService).isAdmin$.pipe(first()),
    ],
  },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
  },
];
