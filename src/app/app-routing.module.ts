import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';
import { DecouvrirDangboComponent } from './pages/decouvrir-dangbo/decouvrir-dangbo.component';
import { MunicipaliteComponent } from './pages/municipalite/municipalite.component';
import { ServicesComponent } from './pages/services/services.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'decouvrir-dangbo', component: DecouvrirDangboComponent },
  { path: 'municipalite', component: MunicipaliteComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
