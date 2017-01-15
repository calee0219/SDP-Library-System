import { Component, OnInit } from '@angular/core';
import { Response, Headers } from "@angular/http";
import { Router } from "@angular/router";

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'lib-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent implements OnInit {
  token: Headers;
  error: any;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit( fn: string,
            ln: string,
            id: string,
            birth: string,
            address: string,
            email: string,
            phone: string,
            account: string,
            passwd: string,
            staff: string ) {
    this.httpService.sign_up({
      first_name: fn,
      last_name: ln,
      phone_number: phone,
      email: email,
      address: address,
      username: account,
      student_id: id,
      password: passwd,
      birthday: birth,
      is_staff: staff
    }).subscribe(
      (data: Response) => {
        this.error = "";
        const myarr = [];
        for(let key in data) {
          myarr.push(data[key]);
        }
        this.token = myarr[0];
        this.router.navigate(['/users-crud']);
      },
      (error: Response) => {
        this.error = "";
        const myArr: any[] = [];
        for(let key in error) {
          console.log(error[key]);
          myArr.push(error[key]);
        }
        this.error = myArr[0];
        console.log(this.error);
      }
    );
  }

}
