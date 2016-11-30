import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-verify',
  template: `
    <h4>
      Please go to your email and check the verification.
    </h4>
  `,
  styles: [`
    h4 {
      margin-top: 40px;
    }
  `]
})
export class VerifyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
