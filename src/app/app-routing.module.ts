import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './article/homepage/homepage.component';
import { SignInComponent } from './article/sign-in/sign-in.component';
import { SignUpComponent } from './article/sign-up/sign-up.component';
import { CheckOutComponent } from './article/check-out/check-out.component';
import { CheckInComponent } from './article/check-in/check-in.component';
import { BookInfoComponent } from './article/book-info/book-info.component';
import { UserInfoComponent } from './article/user-info/user-info.component';
import { VerifyComponent } from './article/sign-up/verify.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: 'book-info', component: BookInfoComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'verify', component: VerifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
