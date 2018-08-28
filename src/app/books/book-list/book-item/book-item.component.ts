import { Component, Input, EventEmitter,Output,OnInit } from '@angular/core';
import { book } from 'D:/Angular/library/src/app/books/book.model';
import {bookService} from 'D:/Angular/library/src/app/book.service';
import { Router ,ActivatedRoute, Params} from '@angular/router';
import  { Category } from 'D:/Angular/library/src/app/Category.model';
import { initDomAdapter } from '@angular/platform-browser/src/browser';



@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
 @Input() books:book[];
issueBook:book;
@Input() id:number=0;
@Input() category:Category[];
@Input() categoryIndex:number;
@Input() emitted:boolean=false;
@Input() index:number;
/*@Output() issueFeature=new EventEmitter<void>();
 @Output() feature =new EventEmitter<void>();
 issueThis(){
this.issueFeature.emit();
 }

 
 onClick()
 {
  this.feature.emit();
 }*/

 constructor( private router:Router,private route:ActivatedRoute,private bs:bookService){
  console.log("id" +this.id);

 }

  

 
 ngOnInit(){
  this.route.params.subscribe((param:Params)=>{
    
    this.id= +param['id'];
this.bs.setCategory(this.id);
    
  });

   this.category=this.bs.getCategory();
  // console.log(this.category);
  this.books=this.bs.getBooks();
  console.log("id" +this.id);


 }
 issueThis(){
  
   this.router.navigate(['/bookIssued',this.id]);
 }
 //issueThis(){
//this.bookService.issueItem.emit(this.books);
 //}
 //onClick(){
//this.bookService.emitBookItem.emit(this.books) }

}
