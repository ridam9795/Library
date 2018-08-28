import { Component, OnInit } from '@angular/core';
import { book } from '../books/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { bookService } from '../book.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-comp-item',
  templateUrl: './comp-item.component.html',
  styleUrls: ['./comp-item.component.css']
})
export class CompItemComponent implements OnInit {
books:book[];

  constructor(private bs:bookService,private router:Router,private authserve:AuthService) { }

  ngOnInit() {
    this.books=this.bs.getMyBooks();
  }
  isAuthenticated() {
    return this.authserve.isAuthenticated();
  }
}
