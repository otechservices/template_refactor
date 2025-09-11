import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/feature/header/header.component';
import { FooterComponent } from './components/feature/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { DecouvrirDangboComponent } from './pages/decouvrir-dangbo/decouvrir-dangbo.component';
import { MunicipaliteComponent } from './pages/municipalite/municipalite.component';
import { ServicesComponent } from './pages/services/services.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeroComponent } from './pages/home/components/hero/hero.component';
import { NewsSectionComponent } from './pages/home/components/news-section/news-section.component';
import { NewsCategoriesComponent } from './pages/home/components/news-categories/news-categories.component';
import { ServicesSectionComponent } from './pages/home/components/services-section/services-section.component';
import { ArticleDetailComponent } from './pages/actualites/components/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ActualitesComponent,
    DecouvrirDangboComponent,
    MunicipaliteComponent,
    ServicesComponent,
    DocumentationComponent,
    ProjetsComponent,
    ContactComponent,
    NotFoundComponent,
    HeroComponent,
    NewsSectionComponent,
    NewsCategoriesComponent,
    ServicesSectionComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
