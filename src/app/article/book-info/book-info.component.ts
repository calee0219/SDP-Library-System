import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'lib-book-info',
  templateUrl: './book-info.component.html',
  styles: [`
    .error {  color: red; margin-bottom: 10px; }
    div.row { margin-bottom: 0; }
    p { margin: 0 auto; }
    .oc { color: red; }
    .va { color: green; }
    table { margin-bottom: 50px; }
  `]
})
export class BookInfoComponent implements OnInit {
  error: any = "";
  bookInfo: any = "";
  barCode: any = "";
  books: any;

  constructor(private httpService: HttpService) { }

  onSubmit(barCode: string) {
    this.bookInfo = "";
    this.error = "";
    this.httpService.getBookId(barCode).subscribe(
      (data: Response) => {
        this.barCode = data;
        this.httpService.bookInfoGet(this.barCode.book).subscribe(
          (data: Response) => { this.bookInfo = data; },
          (error: Response) => { this.error = error; }
        );
      },
      (error: Response) => { this.error = error; }
    );
  }

  ngOnInit() {
    this.httpService.getAllBooks(1).subscribe(
      (data: Response) => { this.books = data; },
      (error: Response) => { this.error = error; }
    );
  }

}
