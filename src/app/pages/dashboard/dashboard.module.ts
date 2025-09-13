import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { InscriptionCapeFormComponent } from './components/inscription-cape-form/inscription-cape-form.component';
import { InscriptionGarderieFormComponent } from './components/inscription-garderie-form/inscription-garderie-form.component';
import { MesDossiersComponent } from './components/mes-dossiers/mes-dossiers.component';
import { SupportTicketComponent } from './components/support-ticket/support-ticket.component';
import { MonProfilComponent } from './components/mon-profil/mon-profil.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSidebarComponent,
    DashboardHeaderComponent,
    DashboardHomeComponent,
    InscriptionCapeFormComponent,
    InscriptionGarderieFormComponent,
    MesDossiersComponent,
    SupportTicketComponent,
    MonProfilComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
