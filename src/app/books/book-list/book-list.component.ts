import { Component,OnInit,Input,ViewChild,ElementRef} from '@angular/core';
import {bookService} from 'D:/Angular/library/src/app/book.service';
import { Category } from '../../Category.model';
import {AuthService} from '../../auth.service';
import { book } from 'D:/Angular/library/src/app/books/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books:book[];
  @Input() category:Category[];
 /* @Output() featured=new EventEmitter<book>();
  anotherClick(book:book){
    this.featured.emit(book);
  }
  @Output() myIssue=new EventEmitter<book>();
newIssue(books:book){
this.myIssue.emit(books);
}*/
@Input() newBook:book;
@ViewChild('nameInput') nameInput:ElementRef;
@ViewChild('imageUrl') imageUrl:ElementRef;
id:number;
constructor(private bs:bookService,private authServe:AuthService){

}


ngOnInit(){
this.books=this.bs.getBooks();
this.category=this.bs.getCategory();
console.log(this.category[0].books);
this.id=this.bs.getCategoryIndex();

}
 

}
