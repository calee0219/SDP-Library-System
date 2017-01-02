import { Injectable } from '@angular/core';
import { Response } from "@angular/http";

import { HttpService } from "./http.service";

@Injectable()
export class UserService {
  error: string[] = [];
  private loggedIn = false;

  constructor(private httpService: HttpService) {
    this.loggedIn = !!localStorage.getItem('token');
  }

  login(uName: string, pw: string): Promise<any> {
    this.httpService.loginPost({
      username: uName,
      password: pw
    }).subscribe(
      (data: Response) => {
        localStorage.setItem('me',uName);
        this.error.pop();
        const myarr = [];
        for(let key in data) {
          myarr.push(data[key]);
        }
        localStorage.setItem('token', myarr[0]);
        this.loggedIn = true;
        console.log(myarr[0]);
        return Promise.resolve(this.loggedIn);
      },
      (error: Response) => {
        this.error.pop();
        for(let key in error) {
          this.error.push(error[key]);
        }
        console.log(this.error);
      }
    );
    console.log('service login',this.loggedIn);
    console.log('service token',localStorage.getItem('token'));
    if(this.loggedIn) return Promise.resolve(this.loggedIn);
    else return Promise.resolve(this.error[0]);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('me');
    this.loggedIn = false;
  }

  isLogin() {
    return this.loggedIn;
  }

}
