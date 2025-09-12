import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: []
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() className = '';

  @Output() onClick = new EventEmitter<void>();

  get buttonClasses(): string {
    const baseClasses = 'font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center';

    const variantClasses = {
      primary: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-800',
      secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
      outline: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800',
      ghost: 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-sm',
      lg: 'px-6 py-3 text-base'
    };

    const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    const widthClasses = this.fullWidth ? 'w-full' : '';

    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${disabledClasses} ${widthClasses} ${this.className}`;
  }

  onButtonClick(): void {
    this.onClick.emit();
  }
}
