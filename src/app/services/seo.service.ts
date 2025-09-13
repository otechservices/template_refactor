import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }

  update(data: SeoData): void {
    if (data.title) {
      this.title.setTitle(data.title);
      this.meta.updateTag({ name: 'og:title', content: data.ogTitle || data.title });
    }

    if (data.description) {
      this.meta.updateTag({ name: 'description', content: data.description });
      this.meta.updateTag({ name: 'og:description', content: data.ogDescription || data.description });
    }

    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    if (data.ogImage) {
      this.meta.updateTag({ name: 'og:image', content: data.ogImage });
    }

    // Note: Handling structured data would require a script tag to be added to the DOM,
    // which is more complex and will be omitted in this basic implementation.
  }
}
