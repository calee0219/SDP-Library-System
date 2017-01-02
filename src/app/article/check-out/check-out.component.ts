import { Component, OnInit, DoCheck } from '@angular/core';
import { Response } from "@angular/http";

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'lib-check-out',
  templateUrl: './check-out.component.html',
  styles: [`
    .error {
      color: red;
    }
  `]
})
export class CheckOutComponent implements OnInit, DoCheck {
  me: any = "";
  myInfo: any = "";
  userInfo: any = "";
  borrowInfo: any = "";
  error: any = "";

  constructor(private httpService: HttpService) { }

  onSubmit(barCode: string, user: string = localStorage.getItem('me')) {
    this.borrowInfo = "";
    this.error = "";
    const today = new Date();
    const dueDay = (today.getMonth() == 11) ? new Date(today.getFullYear() + 1, 0, 1) : new Date(today.getFullYear(), today.getMonth() + 1, 1);
    this.httpService.borrow({
      username: user,
      bar_code: barCode,
      borrowed_time: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      due_time: dueDay.getFullYear()+'-'+(dueDay.getMonth()+1)+'-'+dueDay.getDate()
    }).subscribe(
      ((data: Response) => { this.borrowInfo = data; console.log(data, this.borrowInfo) }),
      ((error: Response) => {
        this.error = error;
        console.log('ERROR',this.error);
      })
    );
    console.log(this.error);
    console.log(this.borrowInfo);
  }

  ngOnInit() {
    this.httpService.userDetail(localStorage.getItem('me'))
      .subscribe(
        (data: Response) => { this.myInfo = data; },
        (error: Response) => { this.error = error; }
      );
    this.userInfo = this.myInfo;
  }

  ngDoCheck() {
    if(localStorage.getItem('me')) this.me = localStorage.getItem('me');
    else this.me = "";
  }

}
