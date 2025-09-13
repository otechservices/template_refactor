import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent {
  @Input() activeSection: string = 'accueil';
  @Output() sectionChange = new EventEmitter<string>();

  menuItems = [
    { id: 'accueil', label: 'Accueil', icon: 'ri-home-line' },
    { id: 'inscription-cape', label: 'Inscription CAPE', icon: 'ri-file-add-line' },
    { id: 'inscription-garderie', label: 'Inscription Garderie', icon: 'ri-building-line' },
    { id: 'mes-dossiers', label: 'Mes Dossiers', icon: 'ri-folder-line' },
    { id: 'assistance-en-ligne', label: 'Assistance en ligne', icon: 'ri-customer-service-line' },
    { id: 'profil', label: 'Mon Profil', icon: 'ri-user-line' }
  ];

  changeSection(section: string): void {
    this.sectionChange.emit(section);
  }
}
