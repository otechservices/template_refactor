import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
})
export class ServicesSectionComponent {
  services = [
    {
      id: 1,
      title: "État Civil",
      description: "Actes de naissance, mariage, décès et autres documents officiels",
      icon: "ri-user-line",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Urbanisme",
      description: "Permis de construire, certificats d'urbanisme, autorisations",
      icon: "ri-building-line",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Développement Local",
      description: "Projets communautaires, infrastructures, développement économique",
      icon: "ri-community-line",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Services Sociaux",
      description: "Action sociale, aide aux familles, programmes d'assistance",
      icon: "ri-heart-line",
      color: "bg-red-500"
    }
  ];

  projects = [
    {
      id: 1,
      title: "Actualités des Élus",
      description: "Suivez les activités et décisions de vos représentants élus",
      items: [
        "Conseils municipaux",
        "Décisions du maire",
        "Projets en cours",
        "Rencontres citoyennes"
      ]
    },
    {
      id: 2,
      title: "Plan de Développement",
      description: "Découvrez notre vision pour l'avenir de Dangbo",
      items: [
        "Projets d'infrastructure",
        "Développement économique",
        "Amélioration des services",
        "Environnement durable"
      ]
    }
  ];

  announcements = [
    {
      id: 1,
      title: "Appel d'offres - Réfection des routes",
      date: "20 Janvier 2025",
      type: "Appel d'offres",
      urgent: true
    },
    {
      id: 2,
      title: "Fermeture temporaire des bureaux",
      date: "18 Janvier 2025",
      type: "Avis",
      urgent: false
    },
    {
      id: 3,
      title: "Assemblée générale citoyenne",
      date: "25 Janvier 2025",
      type: "Convocation",
      urgent: true
    }
  ];
}
