import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';


import { book } from './books/book.model';
import { AuthService } from './auth.service';
import { bookService } from './book.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private bs: bookService,
              private authService: AuthService) {
  }

  storeBooks() {
    const token = this.authService.getToken();

    return this.http.put('https://e-library-7e7eb.firebaseio.com/books.json?auth=' + token,
     this.bs.getMyBooks());
  }

  getBooks() {
    const token = this.authService.getToken();

   this.http.get('https://e-library-7e7eb.firebaseio.com/books.json?auth=' + token)
      .map(
        (response:Response) => {
          const books: book[] = response.json();
          
          return books;
        }
      )
      .subscribe(
        (books: book[]) => {
          this.bs.setMyBooks(books);
        }
      )

      
  }
}
