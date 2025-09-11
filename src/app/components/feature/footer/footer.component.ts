import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  quickLinks = [
    { name: 'État Civil', href: '#' },
    { name: 'Urbanisme', href: '#' },
    { name: 'Taxes Locales', href: '#' },
    { name: 'Démarches en ligne', href: '#' }
  ];

  infoLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Découvrir Dangbo', href: '/decouvrir-dangbo' },
    { name: 'Municipalité', href: '/municipalite' },
    { name: 'Services', href: '/services' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Projets', href: '/projets' },
    { name: 'Contact', href: '/contact' }
  ];
}
