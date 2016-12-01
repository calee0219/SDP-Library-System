import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    this.http.get('lib_back.calee0219.nctu.me/account/user.json')
      .map((response: Response) => response.json());
  }
  sign_up(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://lib_back.calee0219.nctu.me/api/users/', body, { headers: headers })
    .map((data: Response) => data.json());
  }
}
