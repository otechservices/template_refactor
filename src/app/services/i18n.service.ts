import { Injectable } from '@angular/core';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// We will use HttpClient to load translation files
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private initialized = false;

  constructor(private http: HttpClient) {}

  async init() {
    if (this.initialized) {
      return;
    }

    // Dummy resources, in a real scenario these would be loaded from assets
    const resources = {
      en: {
        translation: {
          "welcome": "Welcome"
        }
      },
      fr: {
        translation: {
          "welcome": "Bienvenue"
        }
      }
    };

    await i18next
      .use(LanguageDetector)
      .init({
        resources,
        fallbackLng: 'fr',
        debug: true, // Set to false in production
        interpolation: {
          escapeValue: false, // Not needed for Angular
        },
      });

    this.initialized = true;
  }

  t(key: string | string[], options?: any): string {
    return i18next.t(key, options);
  }

  get language(): string | undefined {
    return i18next.language;
  }

  changeLanguage(lang: string): Promise<any> {
    return i18next.changeLanguage(lang);
  }
}
