import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated = false;

  constructor() {}

  isAuthenticated() {
    return this.authenticated;
  }

  login(): Observable<boolean> {
    this.authenticated = true;
    return of(this.authenticated);
  }
}
