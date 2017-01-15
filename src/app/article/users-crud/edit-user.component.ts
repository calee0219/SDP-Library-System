import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Response } from "@angular/http";
import 'rxjs/add/operator/switchMap';

import { HttpService } from "../../service/http.service";

@Component({
  selector: 'lib-edit-user',
  templateUrl: './edit-user.component.html',
  styles: []
})
export class EditUserComponent implements OnInit {
  userInfo: any;

  constructor(private route: ActivatedRoute,private router: Router, private httpService: HttpService) { }

  abort():void {
    this.router.navigate(['/users-crud']);
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
      (data: Response) => { console.log(data); this.router.navigate(['/users-crud'])},
      (error: Response) => (console.log(error))
    );
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.httpService.userDetail(params['ac']))
      .subscribe(
        (data: Response) => (this.userInfo = data),
        (error: Response) => (console.log(error))
      );
  }

}
