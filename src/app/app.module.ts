import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { HomepageComponent } from './article/homepage/homepage.component';
import { UserInfoComponent } from './article/user-info/user-info.component';
import { BookInfoComponent } from './article/book-info/book-info.component';
import { SignInComponent } from './article/sign-in/sign-in.component';
import { SignUpComponent } from './article/sign-up/sign-up.component';
import { CheckInComponent } from './article/check-in/check-in.component';
import { CheckOutComponent } from './article/check-out/check-out.component';
import { VerifyComponent } from './article/sign-up/verify.component';

import { HttpService } from './service/http.service';
import { AddBooksComponent } from './article/add-books/add-books.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    FooterComponent,
    HomepageComponent,
    UserInfoComponent,
    BookInfoComponent,
    SignInComponent,
    SignUpComponent,
    CheckInComponent,
    CheckOutComponent,
    VerifyComponent,
    AddBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
