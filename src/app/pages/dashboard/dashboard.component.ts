import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  selectedMenu = 'dashboard';

  menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: 'ri-dashboard-line', route: '/dashboard' },
    { id: 'projects', label: 'Générateur de projets', icon: 'ri-file-text-line', route: '/project-generator' },
    { id: 'formation', label: 'Formation PMP', icon: 'ri-book-line', route: '/pmp-training' },
    { id: 'simulator', label: 'Simulateur PMP', icon: 'ri-flask-line', route: '/pmp-simulator' },
    { id: 'progress', label: 'Progression', icon: 'ri-bar-chart-line', route: '/pmp-history' },
    { id: 'settings', label: 'Paramètres', icon: 'ri-settings-line', route: '#' }
  ];

  progressData = [
    { label: 'Formation PMP', progress: 53, color: 'bg-orange-500' },
    { label: 'Simulateur d\'examen', progress: 78, color: 'bg-orange-500' },
    { label: 'Projets générés', progress: 100, color: 'bg-orange-500' }
  ];

  recentActivities = [
    {
      icon: 'ri-check-line',
      title: 'Module "Gestion des risques" complété',
      time: 'Il y a 2 heures',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-file-line',
      title: 'Projet "Application mobile" généré',
      time: 'Hier',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600'
    },
    {
      icon: 'ri-award-line',
      title: 'Test PMP réalisé - Score: 82%',
      time: 'Il y a 2 jours',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      iconColor: 'text-yellow-600'
    },
    {
      icon: 'ri-download-line',
      title: 'Certificat de formation téléchargé',
      time: 'Il y a 3 jours',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600'
    }
  ];

  constructor(public router: Router) {}

  handleMenuClick(item: any) {
    if (item.route && item.route !== '#') {
      this.router.navigate([item.route]);
    } else {
      this.selectedMenu = item.id;
    }
  }
}
