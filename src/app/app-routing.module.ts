import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './article/homepage/homepage.component';
import { BookInfoComponent } from './article/book-info/book-info.component';
import { UserInfoComponent } from './article/user-info/user-info.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'book-info', component: BookInfoComponent },
  { path: 'user-info', component: UserInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
