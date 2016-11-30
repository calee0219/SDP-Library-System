import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    this.http.get('lib_back.calee0219.nctu.me/account/user.json');
  }
}
