import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-municipalite',
  templateUrl: './municipalite.component.html',
})
export class MunicipaliteComponent implements OnInit {

  maire = {
    nom: "HOUNKPEVI Chabi Denis",
    fonction: "Maire de Dangbo",
    mandatDebut: "2020",
    mandatFin: "2026",
    photo: "https://readdy.ai/api/search-image?query=african%20mayor%20official%20portrait%20professional%20suit%20dangbo%20benin%20municipal%20leader%20government%20official%20formal%20photograph%20clean%20background&width=400&height=500&seq=mayor1&orientation=portrait",
    biographie: "Élu maire de Dangbo en 2020, Denis HOUNKPEVI Chabi s'engage pour le développement durable de sa commune. Fort de son expérience en gestion publique, il œuvre pour l'amélioration des infrastructures, l'accès aux services de base et la promotion de l'économie locale."
  };

  conseillers = [
    {
      nom: "AKPOVI Marie-Claire",
      poste: "1ère Adjointe au Maire",
      photo: "https://readdy.ai/api/search-image?query=african%20woman%20councilor%20official%20portrait%20professional%20attire%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor1&orientation=portrait",
      responsabilites: "Affaires sociales et Education"
    },
    {
      nom: "SOGLO Jean-Baptiste",
      poste: "2ème Adjoint au Maire",
      photo: "https://readdy.ai/api/search-image?query=african%20man%20councilor%20official%20portrait%20professional%20suit%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor2&orientation=portrait",
      responsabilites: "Développement économique"
    },
    {
      nom: "TCHAKONDO Estelle",
      poste: "Conseillère Municipale",
      photo: "https://readdy.ai/api/search-image?query=african%20woman%20municipal%20councilor%20official%20portrait%20professional%20dress%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor3&orientation=portrait",
      responsabilites: "Environnement et Santé"
    },
    {
      nom: "GBAGUIDI Pascal",
      poste: "Conseiller Municipal",
      photo: "https://readdy.ai/api/search-image?query=african%20man%20municipal%20councilor%20official%20portrait%20professional%20attire%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor4&orientation=portrait",
      responsabilites: "Infrastructure et Urbanisme"
    },
    {
      nom: "ADEGBIDI Francine",
      poste: "Conseillère Municipale",
      photo: "https://readdy.ai/api/search-image?query=african%20woman%20municipal%20councilor%20official%20portrait%20professional%20blazer%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor5&orientation=portrait",
      responsabilites: "Culture et Tourisme"
    },
    {
      nom: "AKPOVO Germain",
      poste: "Conseiller Municipal",
      photo: "https://readdy.ai/api/search-image?query=african%20man%20municipal%20councilor%20official%20portrait%20professional%20shirt%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor6&orientation=portrait",
      responsabilites: "Jeunesse et Sports"
    }
  ];

  services = [
    {
      nom: "Secrétariat Général",
      responsable: "AKPOVI Sylvain",
      description: "Coordination administrative et suivi des dossiers municipaux",
      icon: "ri-file-text-line"
    },
    {
      nom: "Service Financier",
      responsable: "HOUNSOU Marcelline",
      description: "Gestion budgétaire et comptabilité communale",
      icon: "ri-money-euro-circle-line"
    },
    {
      nom: "Service Technique",
      responsable: "TOGBE Laurent",
      description: "Infrastructures, urbanisme et travaux publics",
      icon: "ri-tools-line"
    },
    {
      nom: "Service État Civil",
      responsable: "FELIHO Rosine",
      description: "Actes de naissance, mariage, décès et CNI",
      icon: "ri-user-settings-line"
    },
    {
      nom: "Service Social",
      responsable: "ADEGBOLA Christine",
      description: "Affaires sociales et aide aux populations vulnérables",
      icon: "ri-heart-line"
    },
    {
      nom: "Service Environnement",
      responsable: "LOKOSSOU Pierre",
      description: "Gestion des déchets et protection environnementale",
      icon: "ri-leaf-line"
    }
  ];

  realisations = [
    {
      annee: "2024",
      projets: [
        "Construction de 5 forages d'eau potable",
        "Réhabilitation de l'école primaire publique de Houédo",
        "Aménagement du marché central de Dangbo"
      ]
    },
    {
      annee: "2023",
      projets: [
        "Électrification de 3 villages",
        "Construction du centre de santé de Gbessou",
        "Bitumage de 2 km de routes communales"
      ]
    },
    {
      annee: "2022",
      projets: [
        "Création de la maison des jeunes",
        "Aménagement des berges du lac Nokoué",
        "Installation de l'éclairage public solaire"
      ]
    }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'Municipalité - Mairie de Dangbo | Maire et Conseil Municipal',
      description: 'Découvrez l\'organisation municipale de Dangbo : présentation du maire, conseil municipal, services administratifs et réalisations de l\'équipe dirigeante.',
      keywords: 'municipalité Dangbo, maire Dangbo, conseil municipal, élus locaux, administration municipale, gouvernance locale',
      ogTitle: 'Municipalité - Mairie de Dangbo',
      ogDescription: 'Organisation municipale et équipe dirigeante de la commune de Dangbo.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: 'https://mairiedangbo.com/municipalite' // Replace with actual domain
    });

    this.seoService.addJSONLD({
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "name": "Conseil Municipal de Dangbo",
      "description": "Organisation municipale et conseil municipal de la commune de Dangbo",
      "url": 'https://mairiedangbo.com/municipalite', // Replace with actual domain
      "parentOrganization": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Dangbo"
      }
    });
  }
}
