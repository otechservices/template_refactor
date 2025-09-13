import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private router: Router) {
    // Check initial login status from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this._isLoggedIn$.next(isLoggedIn);
  }

  get userEmail(): string | null {
    return localStorage.getItem('userEmail');
  }

  login(email: string): void {
    // In a real app, you would make an API call here.
    // For this migration, we replicate the original app's behavior.
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    this._isLoggedIn$.next(true);
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    this._isLoggedIn$.next(false);
    this.router.navigate(['/auth/login']);
  }
}
