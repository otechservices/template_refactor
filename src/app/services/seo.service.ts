import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private isBrowser: boolean;
  private ldJsonScriptElement: HTMLScriptElement | null = null;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  updateMeta(name: string, content: string) {
    this.metaService.updateTag({ name, content });
  }

  updateDescription(content: string) {
    this.metaService.updateTag({ name: 'description', content });
  }

  /**
   * Sets or updates the JSON-LD script tag in the document head.
   * @param schema The JSON-LD schema object.
   */
  setJsonLd(schema: object) {
    if (!this.isBrowser) {
      return;
    }

    if (!this.ldJsonScriptElement) {
      this.ldJsonScriptElement = document.createElement('script');
      this.ldJsonScriptElement.type = 'application/ld+json';
      document.head.appendChild(this.ldJsonScriptElement);
    }

    this.ldJsonScriptElement.textContent = JSON.stringify(schema);
  }
}
