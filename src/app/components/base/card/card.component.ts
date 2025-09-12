import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent {
  @Input() className = '';
  @Input() hover = false;
  @Input() padding: 'sm' | 'md' | 'lg' = 'md';

  get cardClasses(): string {
    const paddingClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    return `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl transition-all ${
      this.hover ? 'hover:shadow-lg dark:hover:shadow-2xl' : ''
    } ${paddingClasses[this.padding]} ${this.className}`;
  }
}
