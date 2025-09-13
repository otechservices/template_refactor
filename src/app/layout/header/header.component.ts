import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn$ = this.authService.isLoggedIn$;
  showInscriptionsMenu = false;

  constructor(private authService: AuthService) { }

  toggleInscriptionsMenu(): void {
    this.showInscriptionsMenu = !this.showInscriptionsMenu;
  }
}
