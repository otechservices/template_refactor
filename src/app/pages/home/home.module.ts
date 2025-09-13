import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewsComponent } from './components/news/news.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { UsefulLinksComponent } from './components/useful-links/useful-links.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    NewsComponent,
    DocumentationComponent,
    UsefulLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
