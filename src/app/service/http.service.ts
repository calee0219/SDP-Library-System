import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
  token: Headers;
  httpURL = 'http://127.0.0.1:8000/';

  constructor(private http: Http) { }

  sign_up(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.httpURL+'api/users/', body, { headers: headers })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  loginPost(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.httpURL+'api/users/login/', body, { headers: headers })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  bookInfoGet(id: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.httpURL+'api/books/'+id+'/', { headers: headers })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  userDetail(user: any) {
    const token: string = localStorage.getItem('token');
    console.log('token',token);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT '+ token);
    console.log(headers);
    console.log('all',this.httpURL+'api/users/calee0219/',{ headers: headers });
    return this.http.get(this.httpURL+'api/users/calee0219/',{ headers: headers })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    return Observable.throw(error.json());
  }
}
