import { Component } from '@angular/core';

@Component({
  selector: 'app-news-categories',
  templateUrl: './news-categories.component.html',
})
export class NewsCategoriesComponent {
  activeCategory = 'all';

  categories = [
    { id: 'all', name: 'Toutes les actualités', icon: 'ri-newspaper-line', count: 12 },
    { id: 'articles', name: 'Articles', icon: 'ri-article-line', count: 5 },
    { id: 'themes', name: 'Thèmes', icon: 'ri-hashtag', count: 3 },
    { id: 'elus', name: 'Élus et Secrétariat', icon: 'ri-government-line', count: 2 },
    { id: 'development', name: 'Développement communal', icon: 'ri-building-line', count: 4 },
    { id: 'announcements', name: 'Avis & Communiqués', icon: 'ri-megaphone-line', count: 6 },
    { id: 'partners', name: 'Partenaires', icon: 'ri-handshake-line', count: 2 },
    { id: 'media', name: 'Presse & Médias', icon: 'ri-camera-line', count: 3 }
  ];

  setActiveCategory(categoryId: string) {
    this.activeCategory = categoryId;
  }
}
