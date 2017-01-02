import {Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, DoCheck {
  login: boolean = false;

  constructor() { }

  click() {
      localStorage.removeItem('token');
      localStorage.removeItem('me');
      this.login = false;
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.login = !!localStorage.getItem('token');
  }

}
