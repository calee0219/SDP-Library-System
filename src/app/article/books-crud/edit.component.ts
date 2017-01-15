import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Response } from "@angular/http";
import 'rxjs/add/operator/switchMap';

import { HttpService } from "../../service/http.service";

@Component({
  selector: 'lib-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {
  bookInfo: any;

  constructor(private route: ActivatedRoute,private router: Router, private httpService: HttpService, private location: Location) { }

  abort():void {
    this.location.back();
  }

  onSubmit(title ,isbn ,author ,publishor ,cNumber) {
    this.httpService.patchBookInfo(this.bookInfo.id,{
      title: title,
      ISBN: isbn,
      author: author,
      publisher: publishor,
      call_number: cNumber,
      bar_codes: []
    }).subscribe(
      (data: Response) => { console.log(data); this.router.navigate(['/books-crud']) },
      (error: Response) => (console.log(error))
    );
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.httpService.bookInfoGet(+params['id']))
      .subscribe(
        (data: Response) => (this.bookInfo = data),
        (error: Response) => (console.log(error))
      );
  }

}
