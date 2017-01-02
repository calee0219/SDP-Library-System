import { Component, OnInit, DoCheck } from '@angular/core';
import { Response } from "@angular/http";

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'lib-user-info',
  templateUrl: './user-info.component.html',
  styles: [`
    .error {
      color: red;
    }
    div.row {
      margin-bottom: 0;
      margin-top: 5px;
    }
  `]
})
export class UserInfoComponent implements OnInit, DoCheck {
  me: any = "";
  myInfo: any = "";
  userInfo: any = "";
  error: any = "";

  constructor(private httpService: HttpService) { }

  onSubmit(user: any) {
    this.httpService.userDetail(user)
      .subscribe(
        (data: Response) => { this.userInfo = data; },
        (error: Response) => { this.error = error; this.userInfo = ""; }
      );
  }

  ngOnInit() {
    this.me = localStorage.getItem('me');
    this.httpService.userDetail(localStorage.getItem('me'))
      .subscribe(
        (data: Response) => { this.myInfo = data; this.userInfo = data; },
        (error: Response) => { this.error = error; }
      );
  }

  ngDoCheck() {
    if(localStorage.getItem('me')) {
      this.me = localStorage.getItem('me');
    }
    else {
      this.me = "";
      this.myInfo = "";
      this.userInfo = "";
    }
  }

}
