import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {

  constructor() { }

  onSubmit(form: NgForm) {
    console.log('Submit Success');
    console.log(form);
  }
  ngOnInit() {
  }

}
