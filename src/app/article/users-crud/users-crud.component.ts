import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Router } from "@angular/router";

import { HttpService } from "../../service/http.service";

@Component({
  selector: 'lib-users-crud',
  templateUrl: './users-crud.component.html',
  styles: [`
    .sta { color: red; }
    .gue { color: green; }
  `]
})
export class UsersCRUDComponent implements OnInit {
  users: any = "";

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.getAllUsers().subscribe(
      (data: Response) => { this.users = data; console.log(this.users); },
      (error: Response) => (console.log(error))
    );
  }

  delete(account) {
    this.httpService.deleteUser(account).subscribe(
      (data: Response) => (console.log(data)),
      (error: Response) => (console.log(error))
    );
  }

  addUser() {
    this.router.navigate(['/users-crud/add-user']);
  }

  onSubmit(user: any) {
    this.router.navigate(['/users-crud/edit/'+user]);
  }

}
