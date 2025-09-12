import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectGeneratorComponent } from './pages/project-generator/project-generator.component';
import { PmpSimulatorComponent } from './pages/pmp-simulator/pmp-simulator.component';
import { PmpHistoryComponent } from './pages/pmp-history/pmp-history.component';
import { PmpTrainingComponent } from './pages/pmp-training/pmp-training.component';
import { PmpTestComponent } from './pages/pmp-test/pmp-test.component';
import { PmpResultComponent } from './pages/pmp-result/pmp-result.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MissionsComponent } from './pages/missions/missions.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ButtonComponent } from './components/base/button/button.component';
import { CardComponent } from './components/base/card/card.component';
import { ModalComponent } from './components/base/modal/modal.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    // Layout
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    // Pages
    HomeComponent,
    DashboardComponent,
    ProjectGeneratorComponent,
    PmpSimulatorComponent,
    PmpHistoryComponent,
    PmpTrainingComponent,
    PmpTestComponent,
    PmpResultComponent,
    LoginComponent,
    RegisterComponent,
    MissionsComponent,
    FormationsComponent,
    ExpertiseComponent,
    ContactComponent,
    NotFoundComponent,
    ThemeToggleComponent,
    FaqComponent,
    AssistanceComponent,
    PrivacyComponent,
    TermsComponent,
    ButtonComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'fr'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
