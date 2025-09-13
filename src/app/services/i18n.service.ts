import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private translations = new BehaviorSubject<any>({});
  public translations$ = this.translations.asObservable();
  private currentLang: string = 'fr';

  constructor(private http: HttpClient) { }

  public init(defaultLang: string = 'fr'): Promise<any> {
    this.currentLang = localStorage.getItem('user-lang') || defaultLang;
    return this.loadTranslations(this.currentLang);
  }

  public setLanguage(lang: string): Promise<any> {
    this.currentLang = lang;
    localStorage.setItem('user-lang', lang);
    return this.loadTranslations(lang);
  }

  private loadTranslations(lang: string): Promise<any> {
    return this.http.get(`/assets/i18n/${lang}.json`)
      .pipe(
        tap(translations => {
          this.translations.next(translations);
        })
      ).toPromise();
  }

  public translate(key: string): string {
    const keys = key.split('.');
    let result = this.translations.getValue();
    for (const k of keys) {
      result = result[k];
      if (!result) {
        return key;
      }
    }
    return result;
  }
}
