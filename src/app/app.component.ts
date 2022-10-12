import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <a
      routerLink="/"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }"
      >Home</a
    >
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {}
