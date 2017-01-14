import { Component, OnInit } from '@angular/core';

import { HttpService } from "../../service/http.service";
import {Response} from "@angular/http";

@Component({
  selector: 'lib-add-book',
  templateUrl: './add-book.component.html',
  styles: []
})
export class AddBookComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  onSubmit(title ,isbn ,author ,publishor ,cNumber) {
    this.httpService.addBook({
      title: title,
      ISBN: isbn,
      author: author,
      publishor: publishor,
      call_number: cNumber,
      bar_codes: []
    }).subscribe(
      (data: Response) => (console.log(data)),
      (error: Response) => (console.log(error))
    );
  }

  ngOnInit() {
  }

}
