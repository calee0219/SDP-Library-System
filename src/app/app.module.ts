import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
