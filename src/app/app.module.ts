import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './Books/book-list/book-list.component';
import { BookItemComponent } from './Books/book-list/book-item/book-item.component';
import { BookDetailsComponent } from './Books/book-details/book-details.component';
import { HeaderComponent } from './header/header.component';
import { IssueBooksComponent } from './book-issue/issue-books/issue-books.component';
import { bookService} from './book.service';
import { AppRoutingModule } from './app-routing.module';
import { BookStartComponent } from './books/book-start/book-start.component';
import { IssuedBooksComponent } from './book-issue/issue-books/issued-books/issued-books.component';
import { CategoryComponent } from './books/category/category.component';
import { DropdownDirective } from './Dropdown.directive';
import { BookDisplayComponent } from './books/book-list/book-display/book-display.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CompDetailsComponent } from './books/comp-details/comp-details.component';
import { CompItemComponent } from './comp-item/comp-item.component';
import { NewBookComponent } from './books/new-book/new-book.component';
import { AuthService } from './auth.service';
import { DataStorageService } from './dataStorage.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailsComponent,
    HeaderComponent,
    IssueBooksComponent,
    BookStartComponent,
    IssuedBooksComponent,
    CategoryComponent,
    DropdownDirective,
    BookDisplayComponent,
    SignUpComponent,
    LoginComponent,
    CompDetailsComponent,
    CompItemComponent,
    NewBookComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [bookService,AuthService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
