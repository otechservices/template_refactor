import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private seoService: SeoService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.seoService.update({ title: 'Connexion - Plateforme CAPE et GARDERIES' });
  }

  async handleSubmit(): Promise<void> {
    if (this.loginForm.invalid) {
      alert('Veuillez remplir tous les champs requis');
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    try {
      // This is a mock API call, as in the original React component.
      // In a real app, this would be a call to a real authentication endpoint.
      const response = await fetch('https://readdy.ai/api/form/d31u8ug49c5vu889jicg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(this.loginForm.value)
      });

      if (response.ok) {
        this.submitStatus = 'success';
        this.authService.login(this.loginForm.value.email);
        // The service will handle navigation.
      } else {
        this.submitStatus = 'error';
      }
    } catch (error) {
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
    }
  }
}
