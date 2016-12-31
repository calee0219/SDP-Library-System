import {Component, OnInit, DoCheck } from '@angular/core';

import { UserService } from '../service/user.service';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, DoCheck {
  login: boolean = false;

  constructor(private userService: UserService) { }

  click() {
    console.log("click sign out");
    this.userService.logout();
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.login = this.userService.isLogin();
  }

}
