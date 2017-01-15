import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Router } from "@angular/router";

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'lib-books-crud',
  templateUrl: './books-crud.component.html',
  styleUrls: []
})
export class BooksCRUDComponent implements OnInit {
  error: any;
  books: any;

  constructor(private httpService: HttpService, private router: Router) { }

  delete(bookId: any) {
    this.httpService.deleteBook(bookId).subscribe(
      (data: Response) => {
        console.log(data);
        this.books.pop();
        this.httpService.getAllBooks().subscribe(
          (data: Response) => { this.books = data; },
          (error: Response) => { this.error = error; }
        );
      },
      (error: Response) => { console.log(error) }
    );
  }

  addBook() {
    console.log("adding book");
    this.router.navigate(['/books-crud/add-book']);
  }

  ngOnInit() {
    this.httpService.getAllBooks().subscribe(
      (data: Response) => { this.books = data; },
      (error: Response) => { this.error = error; }
    );
  }

  onSubmit(barCode: any) {
    this.httpService.getBookId(barCode).subscribe(
      (data: Response) => {
        this.httpService.bookInfoGet((<any>data).book).subscribe(
          (data: Response) => { this.router.navigate(['/books-crud/edit/'+(<any>data).id]); },
          (error: Response) => {this.error = error; console.log(error);}
        );
      }
    );
  }

}
