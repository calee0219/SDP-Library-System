import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Response } from "@angular/http";

import { HttpService } from "../../service/http.service";

@Component({
  selector: 'lib-detail',
  templateUrl: './detail.component.html',
  styles: [`
    th { width: 15%; text-align: right; padding-right: 5%; border-right: 5px; }
    .bc { vertical-align: top; }
    .btn { margin-top: 10px; }
    .oc { color: red; }
    .va { color: green; }
  `]
})
export class DetailComponent implements OnInit {
  bookInfo: any = "";
  error: any = "";
  barCode: any = "";
  barCodes: any = "";

  constructor(private route: ActivatedRoute,private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.httpService.bookInfoGet(+params['id']))
      .subscribe(
        (data: Response) => { console.log(data); this.bookInfo = data; this.barCodes = this.bookInfo.bar_code; console.log(this.barCodes) },
        (error: Response) => (this.error = error)
      );
  }

  back() {
    this.router.navigate(['/book-info']);
  }

}