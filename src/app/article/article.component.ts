import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-article',
  template: `
    <article class="container">
      <router-outlet></router-outlet>
    </article>
  `,
  styles: [`
    article {
      margin-top: 30px;
    }
  `]
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
