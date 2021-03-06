import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
  token: Headers;
  httpURL = 'http://localhost:8000/';
  //httpURL = 'http://lib-back.twleo.com/';

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

  getAllBooks() {
    const token: string = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT '+ token);
    return this.http.get(this.httpURL+'api/books/', { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  deleteBook(bookId: any) {
    const token: string = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT '+ token);
    return this.http.delete(this.httpURL+'api/books/'+bookId+'/', { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  addBook(bookInfo: any) {
    const body = JSON.stringify(bookInfo);
    const headers = new Headers();
    const token: string = localStorage.getItem('token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT '+ token);
    return this.http.post(this.httpURL+'api/books/', body, { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  patchBookInfo(bookId: any, bookInfo: any) {
    const body = JSON.stringify(bookInfo);
    const headers = new Headers();
    const token: string = localStorage.getItem('token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Jwt ' + token);
    return this.http.patch(this.httpURL+'api/books/'+bookId+'/', body, { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  getAllUsers() {
    const token: string = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT '+ token);
    return this.http.get(this.httpURL+'api/users/', { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  deleteUser(userName: any) {
    const token: string = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT '+ token);
    return this.http.delete(this.httpURL+'api/user/'+userName+'/', { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  patchUserInfo(userAc: any, userInfo: any) {
    const body = JSON.stringify(userInfo);
    const headers = new Headers();
    const token: string = localStorage.getItem('token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Jwt ' + token);
    return this.http.patch(this.httpURL+'api/users/'+userAc+'/', body, { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  leftBooks(user: any) {
    const token: string = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'JWT '+ token);
    return this.http.get(this.httpURL+'api/borrowinfos/?username='+user, { headers: headers })
      .map((data: Response) => data.json())
      .catch(HttpService.handleError);
  }

  private static handleError (error: Response) {
    return Observable.throw(error.json() || 'Server error');
  }
}
