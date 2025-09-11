import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  services = [
    { value: 'etat-civil', label: 'État Civil' },
    { value: 'urbanisme', label: 'Urbanisme' },
    { value: 'fiscalite', label: 'Fiscalité' },
    { value: 'social', label: 'Affaires Sociales' },
    { value: 'technique', label: 'Services Techniques' },
    { value: 'autre', label: 'Autre demande' }
  ];

  horaires = [
    { jour: 'Lundi - Vendredi', heures: '7h30 - 17h00' },
    { jour: 'Samedi', heures: '8h00 - 12h00' },
    { jour: 'Dimanche', heures: 'Fermé' }
  ];

  contacts = [
    {
      titre: 'Secrétariat Général',
      telephone: '+229 XX XX XX XX',
      email: 'secretariat@dangbo.bj',
      icon: 'ri-user-settings-line'
    },
    {
      titre: 'État Civil',
      telephone: '+229 XX XX XX XX',
      email: 'etatcivil@dangbo.bj',
      icon: 'ri-file-text-line'
    },
    {
      titre: 'Services Techniques',
      telephone: '+229 XX XX XX XX',
      email: 'technique@dangbo.bj',
      icon: 'ri-tools-line'
    },
    {
      titre: 'Urgences',
      telephone: '+229 XX XX XX XX',
      email: 'urgence@dangbo.bj',
      icon: 'ri-alarm-warning-line'
    }
  ];

  constructor(private fb: FormBuilder, private seoService: SeoService) {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
      service: [''],
      sujet: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'Contact - Mairie de Dangbo | Coordonnées et Horaires',
      description: 'Contactez la Mairie de Dangbo. Adresse, téléphone, horaires d\'ouverture et formulaire de contact. Nous sommes à votre service pour toutes vos démarches.',
      keywords: 'contact Mairie Dangbo, adresse, téléphone, horaires, formulaire contact, service public',
      ogTitle: 'Contact - Mairie de Dangbo',
      ogDescription: 'Coordonnées et informations de contact de la Mairie de Dangbo.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: 'https://mairiedangbo.com/contact' // Replace with actual domain
    });

    this.seoService.addJSONLD({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact - Mairie de Dangbo",
      "description": "Page de contact de la Mairie de Dangbo avec coordonnées et formulaire",
      "url": 'https://mairiedangbo.com/contact', // Replace with actual domain
      "mainEntity": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dangbo",
          "addressCountry": "BJ",
          "postalCode": "BP 123"
        },
        "telephone": "+229-XX-XX-XX-XX",
        "email": "contact@mairiedangbo.bj"
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulaire soumis:', this.contactForm.value);
      // Here you would typically send the form data to a server
      alert('Votre message a été envoyé avec succès !');
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to display validation errors
      this.contactForm.markAllAsTouched();
    }
  }
}
