import { Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { MatchAdminGuard } from './match-admin.guard';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canMatch: [MatchAdminGuard],
  },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
  },
];
