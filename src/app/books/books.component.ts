import { Component, OnInit } from '@angular/core';
import {
  trigger,
state,
style,
animate,
transition,

} from '@angular/animations';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],

})
export class BooksComponent implements OnInit {
 
/*@Output() issueFeature=new EventEmitter<void>();
 @Output() feature =new EventEmitter<void>();
 issueThis(){
this.issueFeature.emit();
 }

 
 onClick()
 {
  this.feature.emit();
 }*/

 constructor( ){
 }



 ngOnInit(){

  
   //this.router.navigate(['/bookIssued',this.index]);
 }
 //issueThis(){
//this.bookService.issueItem.emit(this.books);
 //}
 //onClick(){
//this.bookService.emitBookItem.emit(this.books) }

}

