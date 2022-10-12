import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly isAdmin$$ = new BehaviorSubject<boolean>(true);
  readonly isAdmin$ = this.isAdmin$$.asObservable();

  toggleUserType() {
    this.isAdmin$$.next(!this.isAdmin$$.value);
  }
}
