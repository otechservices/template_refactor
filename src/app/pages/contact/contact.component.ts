import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  isMenuOpen = false;

  contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      description: 'Lun-Ven: 9h-18h'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'contact@sica-conseil.fr',
      description: 'Réponse sous 24h'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Adresse',
      value: '123 Avenue des Champs-Élysées',
      description: '75008 Paris, France'
    },
    {
      icon: 'ri-time-line',
      title: 'Horaires',
      value: 'Lundi - Vendredi',
      description: '9h00 - 18h00'
    }
  ];

  services = [
    { value: 'conseil', label: 'Conseil en Management' },
    { value: 'formation', label: 'Formation PMP' },
    { value: 'audit', label: 'Audit & Optimisation' },
    { value: 'coaching', label: 'Coaching Individuel' },
    { value: 'digital', label: 'Transformation Digitale' },
    { value: 'autre', label: 'Autre demande' }
  ];

  faqs = [
    {
      question: 'Combien coûte une formation PMP ?',
      answer: 'Nos formations PMP sont accessibles dès 1€ pour l\'ensemble du programme complet incluant les tests blancs et le support personnalisé.'
    },
    {
      question: 'Quelle est la durée moyenne d\'une mission de conseil ?',
      answer: 'La durée varie selon la complexité du projet, généralement entre 1 et 6 mois. Nous proposons une évaluation gratuite pour estimer précisément vos besoins.'
    },
    {
      question: 'Proposez-vous des formations en entreprise ?',
      answer: 'Oui, nous proposons des formations sur mesure adaptées aux besoins spécifiques de votre organisation, directement dans vos locaux ou en distanciel.'
    },
    {
      question: 'Comment obtenir un devis personnalisé ?',
      answer: 'Utilisez notre formulaire de contact en précisant vos besoins, ou appelez-nous directement. Nous vous proposerons un devis gratuit sous 48h.'
    }
  ];

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private seoService: SeoService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      service: ['conseil', Validators.required],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    const title = "Contactez-nous - SICA CONSEIL | Gestion de Projet et Formation";
    const description = "Contactez SICA CONSEIL pour vos projets de gestion, formations PMP, conseil en transformation. Consultation gratuite. +33 1 23 45 67 89";

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });

    this.seoService.clearJsonLd();
    this.seoService.setJsonLd(this.seoService.generateWebPageSchema(
      "Contactez-nous - SICA CONSEIL",
      description,
      "/contact"
    ));
    this.seoService.setJsonLd(this.seoService.generateBreadcrumbSchema([
      { name: "Accueil", url: "/" },
      { name: "Contact", url: "/contact" }
    ]));
  }

  ngOnDestroy(): void {
    this.seoService.clearJsonLd();
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulaire envoyé:', this.contactForm.value);
      alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
      this.contactForm.reset();
    }
  }
}
