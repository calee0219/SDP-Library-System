import { Component, OnInit, DoCheck } from '@angular/core';
import { Response } from "@angular/http";

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'lib-user-info',
  templateUrl: './user-info.component.html',
  styles: [`
    .error { color: red; }
    div.row { margin-bottom: 0; margin-top: 5px; }
    .highlight th { width: 15%; text-align: right; padding-right: 5%; }
  `]
})
export class UserInfoComponent implements OnInit, DoCheck {
  me: any = "";
  myInfo: any = "";
  userInfo: any = "";
  error: any = "";
  books: any = "";
  bookInfo: any[] = [];

  constructor(private httpService: HttpService) { }

  onSubmit(user: any) {
    this.httpService.userDetail(user)
      .subscribe(
        (data: Response) => {this.userInfo = data; },
        (error: Response) => { this.error = error; this.userInfo = ""; }
      );
    this.httpService.leftBooks(user).subscribe(
      (data: Response) => {
        this.books = data;
        this.bookInfo.pop();
        console.log(data);
        for(let i in data) {
          console.log(data[i].bar_code);
          this.httpService.getBookId(data[i].bar_code).subscribe(
            (data: Response) => {
              this.httpService.bookInfoGet((<any>data).book).subscribe(
                (data: Response) => { this.bookInfo.push(data); }
              );
            }
          );
        }
      },
      (error: Response) => (this.error = error)
    );
  }

  ngOnInit() {
    this.me = localStorage.getItem('me');
    this.httpService.userDetail(localStorage.getItem('me'))
      .subscribe(
        (data: Response) => { this.myInfo = data; this.userInfo = data; localStorage.setItem('userInfo',JSON.stringify(data)); localStorage.setItem('isStaff',this.userInfo.is_staff); },
        (error: Response) => { this.error = error; }
      );
    this.httpService.leftBooks(localStorage.getItem('me')).subscribe(
      (data: Response) => (this.books = data),
      (error: Response) => (this.error = error)
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
