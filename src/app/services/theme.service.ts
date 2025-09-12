import { Injectable, signal, effect, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isBrowser = isPlatformBrowser(this.platformId);

  theme = signal<Theme>('light');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (this._isBrowser) {
      // Initialize theme from localStorage or system preference
      const storedTheme = localStorage.getItem('theme') as Theme;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
      this.theme.set(initialTheme);

      // Effect to apply theme changes to the DOM and localStorage
      effect(() => {
        const newTheme = this.theme();
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
      });
    }
  }

  toggleTheme() {
    this.theme.update(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  }
}
