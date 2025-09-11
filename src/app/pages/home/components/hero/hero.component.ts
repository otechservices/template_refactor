import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private intervalId: any;

  slides = [
    {
      id: 1,
      title: "Bienvenue à Dangbo",
      subtitle: "Une commune dynamique au service de ses citoyens",
      description: "Découvrez une administration moderne et transparente, engagée pour le développement de notre territoire",
      image: "https://readdy.ai/api/search-image?query=Beautiful%20modern%20city%20hall%20building%20with%20African%20architectural%20elements%2C%20blue%20sky%2C%20palm%20trees%2C%20clean%20modern%20design%2C%20government%20building%20in%20tropical%20setting%2C%20professional%20architecture%20photography&width=800&height=500&seq=hero1&orientation=landscape"
    },
    {
      id: 2,
      title: "Services Municipaux",
      subtitle: "Des services de qualité pour tous",
      description: "État civil, urbanisme, développement local - nous accompagnons tous vos projets",
      image: "https://readdy.ai/api/search-image?query=Modern%20municipal%20services%20office%20with%20friendly%20staff%20helping%20citizens%2C%20clean%20professional%20environment%2C%20African%20municipal%20workers%2C%20government%20services%2C%20customer%20service%20desk&width=800&height=500&seq=hero2&orientation=landscape"
    },
    {
      id: 3,
      title: "Développement Durable",
      subtitle: "Construisons ensemble l'avenir de Dangbo",
      description: "Projets d'infrastructure, environnement, économie locale - une vision pour demain",
      image: "https://readdy.ai/api/search-image?query=Sustainable%20development%20projects%20in%20African%20town%2C%20solar%20panels%2C%20green%20infrastructure%2C%20modern%20roads%2C%20environmental%20projects%2C%20community%20development%2C%20tropical%20landscape&width=800&height=500&seq=hero3&orientation=landscape"
    }
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
