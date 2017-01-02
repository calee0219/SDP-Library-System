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
      .catch(HttpService.handleError);
  }

  loginPost(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.httpURL+'api/users/login/', body, { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  bookInfoGet(id: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.httpURL+'api/books/'+id+'/', { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  userDetail(user: any) {
    const token: string = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT '+ token);
    return this.http.get(this.httpURL+'api/users/'+user+'/',{ headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  borrow(info: any) {
    const body = JSON.stringify(info);
    const token: string = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT '+ token);
    return this.http.post(this.httpURL+'api/borrowinfos/', body, { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  getBookId(barCode: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.httpURL+'api/barcodes/'+barCode+'/', { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  getBorrowId(barCode: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.httpURL+'api/borrowinfos/?barcode='+barCode, { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  returnBook(bookId: any) {
    const token: string = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT '+ token);
    return this.http.delete(this.httpURL+'api/borrowinfos/'+bookId+'/', { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  private static handleError (error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
