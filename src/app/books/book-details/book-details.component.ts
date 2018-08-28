import { Component, OnInit , Input } from '@angular/core';
import {book} from 'D:/Angular/library/src/app/books/book.model';
import { Router,ActivatedRoute ,Params} from '@angular/router';
import {bookService} from 'D:/Angular/library/src/app/book.service';
import { Category } from '../../Category.model';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
@Input() books:book[];
  constructor(private bookService:bookService,private route:ActivatedRoute,private router:Router) { }
id:number;
category:Category[];
emitted:boolean=false;
index:number;
myCategory:Category;
link1=[
  "https://drive.google.com/open?id=0B51JhO0eWckoS2phOExESENoUjQ",
 
];
link2=[
  "https://drive.google.com/open?id=0B51JhO0eWckoOTFtZFZMZlJ6Zk0",
  "https://drive.google.com/open?id=0B51JhO0eWckoeElTUkRBa3BfV2M"
];
cI:number;
  ngOnInit() {
   // this.bookService.emitBookItem.subscribe((books:book)=>{
     // this.books=books;
   // });
   this.category=this.bookService.getCategory();
this.myCategory=this.category[this.bookService.getCategoryIndex()];
  this.books=this.bookService.getBooks();
  
   
    this.route.params.subscribe((param:Params)=>{
      this.id= +param['id'];
      console.log("index:"+this.index+" id:"+this.id);
  this.cI=this.bookService.getCategoryIndex();
          
     // this.books=this.bookService.getBookItem(this.id);
    });
    
 
  
  



 
   
  
 
  
  }


}
