import { Component ,Input, OnInit} from '@angular/core';
import { book } from './books/book.model';
import { bookService } from './book.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() myBook:book;
  title = 'app';
  loadedFeature='About-book';
  getIssue:book;
  issue(books:book){
this.getIssue=books;
  }
  selectedLink(nav:string){
this.loadedFeature=nav;
  }
  constructor(private bs:bookService) { }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC8g64nPBwgFiQzEVeuy7MnF1G90Hmqke4",
      authDomain: "e-library-7e7eb.firebaseapp.com",
    });
    this.bs.issueItem.subscribe((books:book)=>{
      
      this.myBook=books;
     });
  }
}
