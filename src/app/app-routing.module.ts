import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { LoginComponent } from './pages/login/login.component';
import { MissionsComponent } from './pages/missions/missions.component';
import { PmpHistoryComponent } from './pages/pmp-history/pmp-history.component';
import { PmpResultComponent } from './pages/pmp-result/pmp-result.component';
import { PmpSimulatorComponent } from './pages/pmp-simulator/pmp-simulator.component';
import { PmpTestComponent } from './pages/pmp-test/pmp-test.component';
import { PmpTrainingComponent } from './pages/pmp-training/pmp-training.component';
import { ProjectGeneratorComponent } from './pages/project-generator/project-generator.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'expertise', component: ExpertiseComponent },
      { path: 'formations', component: FormationsComponent },
      { path: 'missions', component: MissionsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'pmp-training', component: PmpTrainingComponent },
      { path: 'pmp-test', component: PmpTestComponent },
      { path: 'pmp-simulator', component: PmpSimulatorComponent },
      { path: 'pmp-history', component: PmpHistoryComponent },
      { path: 'pmp-result', component: PmpResultComponent },
      { path: 'project-generator', component: ProjectGeneratorComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
