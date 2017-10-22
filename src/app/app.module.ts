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
import {AuthInterceptor} from './interceptors/auth.interceptors';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './components/footer/footer.component';
import {routing} from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './services/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import {BooksService} from './services/books/books.service';
// import {AuthGuard} from './guards/auth-guard.guard';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    NotFoundComponent,
    MainComponent,
    BooksListComponent,
    ListComponent,
    BookComponent,
    FooterComponent,
    NavbarComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthInterceptor,
    BooksService,
    // AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
