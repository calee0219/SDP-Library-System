import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './article/homepage/homepage.component';
import { BookInfoComponent } from './article/book-info/book-info.component';
import { UserInfoComponent } from './article/user-info/user-info.component';
import { SignInComponent } from './article/sign-in/sign-in.component';
import { SignUpComponent } from './article/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'book-info', component: BookInfoComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
