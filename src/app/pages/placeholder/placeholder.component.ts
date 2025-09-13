import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-placeholder',
  template: `
    <div class="p-8">
      <h1 class="text-3xl font-bold">Page: {{ pageName$ | async }}</h1>
      <p class="text-gray-600 mt-4">This is a placeholder page. The content will be migrated later.</p>
    </div>
  `
})
export class PlaceholderComponent implements OnInit {
  pageName$: Observable<string | null>;

  constructor(private route: ActivatedRoute) {
    this.pageName$ = this.route.data.pipe(map(data => data['pageName'] || 'Placeholder'));
  }

  ngOnInit(): void { }
}
