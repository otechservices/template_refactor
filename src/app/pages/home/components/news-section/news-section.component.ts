import { Component } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
})
export class NewsSectionComponent {
  news = [
    {
      id: 1,
      title: "Nouveau projet d'éclairage public",
      excerpt: "La mairie lance un ambitieux programme de modernisation de l'éclairage public pour améliorer la sécurité...",
      date: "15 Janvier 2025",
      category: "Projets",
      image: "https://readdy.ai/api/search-image?query=Modern%20street%20lighting%20project%20in%20African%20town%2C%20LED%20street%20lamps%2C%20night%20illumination%2C%20urban%20development%2C%20municipal%20infrastructure%2C%20modern%20lighting%20system&width=400&height=250&seq=news1&orientation=landscape"
    },
    {
      id: 2,
      title: "Campagne de vaccination gratuite",
      excerpt: "Organisation d'une campagne de vaccination gratuite pour tous les enfants de 0 à 5 ans dans notre commune...",
      date: "12 Janvier 2025",
      category: "Santé",
      image: "https://readdy.ai/api/search-image?query=Healthcare%20vaccination%20campaign%20in%20Africa%2C%20medical%20staff%2C%20children%20vaccination%2C%20health%20center%2C%20community%20health%20program%2C%20medical%20professionals%20helping%20children&width=400&height=250&seq=news2&orientation=landscape"
    },
    {
      id: 3,
      title: "Marché moderne de Dangbo",
      excerpt: "Inauguration prochaine du nouveau marché moderne équipé de toutes les commodités pour nos commerçants...",
      date: "10 Janvier 2025",
      category: "Économie",
      image: "https://readdy.ai/api/search-image?query=Modern%20African%20market%20building%2C%20covered%20market%20structure%2C%20vendors%20selling%20fresh%20produce%2C%20bustling%20marketplace%2C%20contemporary%20market%20architecture%2C%20commercial%20development&width=400&height=250&seq=news3&orientation=landscape"
    }
  ];
}
