import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  template: `
    <span>Is Admin: {{ authService.isAdmin$ | async }}</span>
    <button (click)="authService.toggleUserType()">Toggle User Type</button>
  `,
  imports: [AsyncPipe],
  standalone: true,
})
export class HomeComponent {
  readonly authService = inject(AuthService);
}
