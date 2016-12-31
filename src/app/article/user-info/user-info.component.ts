import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'lib-user-info',
  templateUrl: './user-info.component.html',
  styles: []
})
export class UserInfoComponent implements OnInit {
  myInfo: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.myInfo = this.httpService.userDetail(localStorage.getItem('me'));
    console.log('myinfo',this.myInfo);
  }

}
