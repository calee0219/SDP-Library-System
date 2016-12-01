import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../http/http.service';

@Component({
  selector: 'lib-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  onSubmit( fn: string,
            ln: string,
            id: string,
            birth: string,
            address: string,
            email: string,
            phone: string,
            account: string,
            passwd: string ) {
    this.httpService.sign_up({
      first_name: fn,
      last_name: ln,
      phone_number: phone,
      email: email,
      username: account,
      student_id: id,
      password: passwd,
      birthday: birth
    })
      .subscribe(data => console.log(data));
  }
}
