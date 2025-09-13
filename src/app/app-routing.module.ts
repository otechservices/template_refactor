import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  // Placeholder routes
  { path: 'inscription-cape', component: PlaceholderComponent, data: { pageName: 'Inscription CAPE' } },
  { path: 'inscription-garderie', component: PlaceholderComponent, data: { pageName: 'Inscription Garderie' } },
  { path: 'cape-autorises', component: PlaceholderComponent, data: { pageName: 'CAPE Autorisés' } },
  { path: 'garderies-autorisees', component: PlaceholderComponent, data: { pageName: 'Garderies Autorisées' } },
  { path: 'deliberations-cape', component: PlaceholderComponent, data: { pageName: 'Délibérations CAPE' } },
  { path: 'deliberations-garderie', component: PlaceholderComponent, data: { pageName: 'Délibérations Garderie' } },
  { path: 'contact', component: PlaceholderComponent, data: { pageName: 'Contact' } },
  { path: 'information', component: PlaceholderComponent, data: { pageName: 'Information' } },
  { path: 'session-results', component: PlaceholderComponent, data: { pageName: 'Session Results' } },
  { path: 'faq', component: PlaceholderComponent, data: { pageName: 'FAQ' } },
  { path: 'assistance-en-ligne', component: PlaceholderComponent, data: { pageName: 'Assistance en Ligne' } },
  { path: 'candidature-professionnel', component: PlaceholderComponent, data: { pageName: 'Candidature Professionnel' } },
  { path: 'auth/register', component: PlaceholderComponent, data: { pageName: 'Register' } },
  { path: 'actualites', component: PlaceholderComponent, data: { pageName: 'Actualités' } },
  { path: 'actualites/:id', component: PlaceholderComponent, data: { pageName: 'Article' } },

  // Not found route
  { path: '**', component: PlaceholderComponent, data: { pageName: 'Not Found' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
