import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  constructor() { }

  onSubmit(form: NgForm) {
    console.log('Submit Success');
    console.log(form);
  }
  ngOnInit() {
  }

}
