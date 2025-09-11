import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Découvrir Dangbo', href: '/decouvrir-dangbo' },
    { name: 'Municipalité', href: '/municipalite' },
    { name: 'Services', href: '/services' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Projets', href: '/projets' },
    { name: 'Contact', href: '/contact' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
