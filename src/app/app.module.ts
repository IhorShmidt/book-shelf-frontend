import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {AuthComponent} from './components/auth/auth.component';
import {LoginComponent} from './components/auth/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MainComponent} from './components/main/main.component';
import {BooksListComponent} from './components/books-list/books-list.component';
import {ListComponent} from './components/list/list.component';
import {BookComponent} from './components/book/book.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    NotFoundComponent,
    MainComponent,
    BooksListComponent,
    ListComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
