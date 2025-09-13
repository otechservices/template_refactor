import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './pages/auth/auth.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { PlaceholderModule } from './pages/placeholder/placeholder.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AuthModule,
    DashboardModule,
    PlaceholderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
