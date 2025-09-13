import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activeSection = 'accueil';

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.update({ title: 'Tableau de bord - Plateforme CAPE et GARDERIES' });
  }

  onSectionChange(section: string): void {
    this.activeSection = section;
  }
}
