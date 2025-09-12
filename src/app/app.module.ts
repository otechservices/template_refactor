import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';

// Base Components
import { ThemeToggleComponent } from './components/base/theme-toggle/theme-toggle.component';
import { ButtonComponent } from './components/base/button/button.component';
import { CardComponent } from './components/base/card/card.component';
import { ModalComponent } from './components/base/modal/modal.component';

// Page Components
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

@NgModule({
  declarations: [
    AppComponent,
    // Layout
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    // Base
    ThemeToggleComponent,
    ButtonComponent,
    CardComponent,
    ModalComponent,
    // Pages
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    ExpertiseComponent,
    FormationsComponent,
    LoginComponent,
    MissionsComponent,
    PmpHistoryComponent,
    PmpResultComponent,
    PmpSimulatorComponent,
    PmpTestComponent,
    PmpTrainingComponent,
    ProjectGeneratorComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
