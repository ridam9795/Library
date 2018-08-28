import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { bookService } from '../../book.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  constructor(private bs:bookService,private authServe:AuthService) { }
  isAuthenticated() {
    return this.authServe.isAuthenticated();
  }
  addBook(form:NgForm){
const name=form.value.bname;
const imgPath=form.value.imgPath;
const Author=form.value.Author;

this.bs.addBookItem({name,imgPath,Author});
  }

  ngOnInit() {
  }

}
