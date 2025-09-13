import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme: 'light' | 'dark' = 'light';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    this.colorTheme = localStorage.getItem('user-theme') as 'light' | 'dark' || this.getSystemTheme();
    this.updateTheme(this.colorTheme);
  }

  private getSystemTheme(): 'light' | 'dark' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private updateTheme(theme: 'light' | 'dark') {
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
    if (theme === 'dark') {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }

  toggleTheme() {
    const newTheme = this.colorTheme === 'dark' ? 'light' : 'dark';
    this.updateTheme(newTheme);
  }

  isDarkMode(): boolean {
    return this.colorTheme === 'dark';
  }
}
