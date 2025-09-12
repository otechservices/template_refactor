import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  loginForm!: FormGroup;
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      // The form is invalid, and the submit button should be disabled,
      // but this is a safeguard.
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    const body = new HttpParams()
      .set('email', this.loginForm.value.email)
      .set('password', this.loginForm.value.password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    this.http.post('https://readdy.ai/api/form/d31u8ug49c5vu889jicg', body.toString(), { headers, observe: 'response' })
      .pipe(
        finalize(() => this.isSubmitting = false)
      )
      .subscribe({
        next: (response) => {
          if (response.ok) {
            this.submitStatus = 'success';
            // Simulate a successful login
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('userEmail', this.loginForm.value.email);
            }
            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 1500);
          } else {
            this.submitStatus = 'error';
          }
        },
        error: () => {
          this.submitStatus = 'error';
        }
      });
  }
}
