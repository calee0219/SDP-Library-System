import {Component, OnInit, DoCheck} from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../../service/user.service";

@Component({
  selector: 'lib-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [`
    #errorMSG {
      color: red;
      display: inline-block;
      margin-left: 10px;
    }
  `]
})
export class SignInComponent implements OnInit, DoCheck {
  error: string ="";

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(uName: string, pw: string) {
    this.userService.login(uName, pw).then(data => {
      this.error = data;
      console.log('Data',data);
      if(data == true) { this.router.navigate(['/check-out']); }
    });
  }

  ngOnInit() { }

  ngDoCheck() {
    console.log(this.error);
  }

}
