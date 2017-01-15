import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, DoCheck {
  login: boolean = false;
  isAdm: boolean = false;
  name: string;
  error: any;

  constructor(private router: Router) { }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('me');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('isStaff');
    this.login = false;
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isAdm = (localStorage.getItem('isStaff')=='true')? true:null;
    this.login = !!localStorage.getItem('token');
    this.name = localStorage.getItem('me');
  }
}
