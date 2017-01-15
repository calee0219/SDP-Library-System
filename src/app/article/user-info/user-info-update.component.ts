import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Response } from "@angular/http";

import {HttpService} from "../../service/http.service";

@Component({
  selector: 'lib-user-info-update',
  templateUrl: 'user-info-update.component.html',
  styles: []
})
export class UserInfoUpdateComponent implements OnInit {
  userInfo: any;

  constructor(private router: Router, private httpService: HttpService) { }

  abort():void {
    this.router.navigate(['/user-info']);
  }

  onSubmit(title,fName,lName,id,birth,address,email,phone,staff,pw) {
    this.httpService.patchUserInfo(this.userInfo.username,{
      username: title,
      first_name: fName,
      last_name: lName,
      student_id: id,
      birthday: birth,
      address: address,
      email: email,
      phone_number: phone,
      is_staff: staff,
      password: pw
    }).subscribe(
      (data: Response) => { this.router.navigate(['/users-crud'])},
      (error: Response) => (console.log(error))
    );
  }

  ngOnInit() {
    this.httpService.userDetail(localStorage.getItem('me')).subscribe(
      (data: Response) => (this.userInfo = data)
    );
  }

}
