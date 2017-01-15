import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './article/sign-in/sign-in.component';
import { SignUpComponent } from './article/sign-up/sign-up.component';
import { CheckOutComponent } from './article/check-out/check-out.component';
import { CheckInComponent } from './article/check-in/check-in.component';
import { BookInfoComponent } from './article/book-info/book-info.component';
import { UserInfoComponent } from './article/user-info/user-info.component';
import { VerifyComponent } from './article/sign-up/verify.component';
import { BooksCRUDComponent } from './article/books-crud/books-crud.component';
import { AddBookComponent } from './article/books-crud/add-book.component';
import { EditComponent } from './article/books-crud/edit.component';
import { UsersCRUDComponent } from './article/users-crud/users-crud.component';
import { DetailComponent } from './article/book-info/detail.component';
import { EditUserComponent } from './article/users-crud/edit-user.component';
import { AddUserComponent } from './article/users-crud/add-user.component';
import { UserInfoUpdateComponent } from './article/user-info/user-info-update.component';

const routes: Routes = [
  { path: '', component: CheckOutComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: 'book-info', component: BookInfoComponent },
  { path: 'book-info/:id', component: DetailComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'books-crud', component: BooksCRUDComponent },
  { path: 'books-crud/add-book', component: AddBookComponent },
  { path: 'books-crud/edit/:id', component: EditComponent },
  { path: 'users-crud', component: UsersCRUDComponent },
  { path: 'users-crud/edit/:ac', component: EditUserComponent },
  { path: 'users-crud/add-user', component: AddUserComponent },
  { path: 'user-info/update', component: UserInfoUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
