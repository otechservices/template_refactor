import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent {
  @Input() article!: Article;
  @Output() back = new EventEmitter<void>();

  currentImageIndex = 0;

  relatedArticles: Partial<Article>[] = [
    {
      id: 2,
      title: "Conseil Municipal du 20 Janvier 2025",
      excerpt: "Ordre du jour du prochain conseil municipal...",
      date: "10 Janvier 2025",
      category: "Conseil Municipal",
      image: "https://readdy.ai/api/search-image?query=municipal%20council%20meeting%20african%20officials%20discussing%20documents%20in%20modern%20meeting%20room%20dangbo%20benin%20government%20building%20clean%20professional%20background&width=300&height=200&seq=related1&orientation=landscape"
    },
    {
      id: 3,
      title: "Festival culturel de Dangbo 2025",
      excerpt: "Venez découvrir la richesse culturelle de Dangbo...",
      date: "8 Janvier 2025",
      category: "Événements",
      image: "https://readdy.ai/api/search-image?query=african%20cultural%20festival%20traditional%20dancers%20colorful%20costumes%20dangbo%20benin%20celebration%20community%20gathering%20vibrant%20clean%20background&width=300&height=200&seq=related2&orientation=landscape"
    }
  ];

  getCategoryColor(category: string): string {
    switch (category) {
      case 'Conseil Municipal': return 'bg-green-100 text-green-800';
      case 'Projets': return 'bg-blue-100 text-blue-800';
      case 'Événements': return 'bg-purple-100 text-purple-800';
      case 'Avis Publics': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  nextImage(): void {
    if (this.article.gallery) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.article.gallery.length;
    }
  }

  prevImage(): void {
    if (this.article.gallery) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.article.gallery.length) % this.article.gallery.length;
    }
  }

  setCurrentImage(index: number): void {
    this.currentImageIndex = index;
  }

  onBack(): void {
    this.back.emit();
  }
}
