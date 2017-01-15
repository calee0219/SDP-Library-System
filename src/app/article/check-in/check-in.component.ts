import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";

import { HttpService } from "../../service/http.service";

@Component({
  selector: 'lib-check-in',
  templateUrl: './check-in.component.html',
  styles: [`
    .error { color: red; }
    th { width: 15%; text-align: right; padding-right: 5%; }
  `]
})
export class CheckInComponent implements OnInit {
  error: any = "";
  now: Date = new Date();
  today: any = "";
  borrowInfo: any = "";
  returnSuccess: any = "";
  bookName: any = "";

  constructor(private httpService: HttpService) { }

  onSubmit(barCode: any) {
    this.today = this.now.getFullYear()+'-'+('0'+(this.now.getMonth()+1)).slice(-2)+'-'+('0'+this.now.getDate()).slice(-2);
    this.bookName = "";
    this.error = "";
    this.returnSuccess = "";
    this.httpService.getBorrowId(barCode)
      .subscribe(
        ((data: Response) => {
          this.borrowInfo = data;
          if(this.borrowInfo[0]) {
            this.httpService.returnBook(this.borrowInfo[0].id)
              .subscribe(
                ((data: Response) => {
                  this.returnSuccess = this.borrowInfo[0];
                  console.log(this.returnSuccess.due_time);
                  const tmpDue = new Date(this.returnSuccess.due_time);
                  if(tmpDue < this.now) {
                    window.alert("You have postpone this book for "+((this.now.getTime() - tmpDue.getTime())/86400000)+" days");
                  }
                }),
                ((error: Response) => this.error = error)
              );
          } else {
            this.error = "this book hasn't been borrowed";
          }
        }),
        ((error: Response) => this.error = error)
      );
    this.httpService.getBookId(barCode).subscribe(
      ((data: Response) => {
        const bookId: any = data;
        this.httpService.bookInfoGet(bookId.book).subscribe(
          ((data: Response) => this.bookName = data)
        );
      }),
      ((error: Response) => this.error = error)
    );
  }

  ngOnInit() {
  }

}
