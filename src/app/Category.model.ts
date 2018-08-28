import { book } from "./books/book.model";
export class Category{
books=[];



    constructor(book1:book[]){
  this.books=book1;
  
    }
}