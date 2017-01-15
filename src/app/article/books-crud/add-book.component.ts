import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Router } from "@angular/router";

import { HttpService } from "../../service/http.service";

@Component({
  selector: 'lib-add-book',
  templateUrl: './add-book.component.html',
  styles: []
})
export class AddBookComponent implements OnInit {
  error: any;
  barCodeNum: number[] = [];

  constructor(private httpService: HttpService, private router: Router) { }

  /*
  onSubmit(bookInfoForm) {
    console.log(bookInfoForm);
  }
  */
  onSubmit(title ,isbn ,author ,publishor ,cNumber, barCode) {
    this.httpService.addBook({
      title: title,
      ISBN: isbn,
      author: author,
      publisher: publishor,
      call_number: cNumber,
      bar_codes: []
    }).subscribe(
      (data: Response) => { console.log(data); this.router.navigate(['/books-crud']) },
      (error: Response) => { this.error = error; console.log(error) }
    );
  }

  addBarCode() {
    this.barCodeNum.push(1);
  }

  rmBarCode() {
    this.barCodeNum.pop();
  }

  ngOnInit() {
  }

}
