import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Response, Headers } from "@angular/http";
import { Router } from "@angular/router";

@Component({
  selector: 'lib-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [`
    .error {
      color: red;
    }
  `]
})
export class SignUpComponent implements OnInit {
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
            passwd: string ) {
    this.httpService.sign_up({
      first_name: fn,
      last_name: ln,
      phone_number: phone,
      email: email,
      address: address,
      username: account,
      student_id: id,
      password: passwd,
      birthday: birth
    }).subscribe(
      (data: Response) => {
        this.error = "";
        const myarr = [];
        for(let key in data) {
          myarr.push(data[key]);
        }
        this.token = myarr[0];
        this.router.navigate(['/verify']);
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
