import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Response } from "@angular/http";

import { HttpService } from "../../service/http.service";

@Component({
  selector: 'lib-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [`
    #errorMSG {
      color: red;
      display: inline-block;
      margin-left: 10px;
    }
  `]
})
export class SignInComponent implements OnInit {
  error: any ="";

  constructor(private httpService: HttpService, private router: Router) { }

  onSubmit(uName: string, pw: string) {
    this.httpService.loginPost({
      username: uName,
      password: pw
    }).subscribe(
      (data: Response) => {
        localStorage.setItem('me',uName);
        this.error = "";
        const myarr = [];
        for(let key in data) {
          myarr.push(data[key]);
        }
        localStorage.setItem('token', myarr[0]);
        this.router.navigate(['/user-info']);
      },
      (error: Response) => {
        this.error = error[0];
        console.log(this.error);
      }
    );
  }

  ngOnInit() { }

}
