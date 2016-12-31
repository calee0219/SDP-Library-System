import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'lib-book-info',
  templateUrl: './book-info.component.html',
  styles: [`
    .error {
      color: red;
      margin-bottom: 10px;
    }
    div.row {
      margin-bottom: 0;
    }
  `]
})
export class BookInfoComponent implements OnInit {
  error: any = "";
  bookInfo: any = "";

  constructor(private httpService: HttpService) { }

  onSubmit(bookId: string) {
    this.bookInfo = "";
    this.error = "";
    this.httpService.bookInfoGet(bookId).subscribe(
      (data: Response) => { this.bookInfo = data; },
      (error: Response) => { this.error = error; }
    );
  }

  ngOnInit() {
  }

}
