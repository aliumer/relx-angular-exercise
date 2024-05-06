import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable, of } from 'rxjs';

class MockAuthService {
  isAuthenticated(): Observable<boolean> {
    return of(true);
  }
}

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          },
        },
        { provide: RouterStateSnapshot, useValue: { url: '/details/10' } },
        { provide: ActivatedRouteSnapshot, useValue: {} },
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
