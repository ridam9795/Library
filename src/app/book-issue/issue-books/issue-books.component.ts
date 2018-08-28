import { Component, OnInit,Input } from '@angular/core';
import { book } from '../../books/book.model';
import { bookService } from '../../book.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-issue-books',
  templateUrl: './issue-books.component.html',
  styleUrls: ['./issue-books.component.css']
})
export class IssueBooksComponent implements OnInit {
@Input() issueMyBook:book;
id:number;

  constructor(private bs:bookService,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe((param:Params)=>{
      this.id= +param['id'];
      this.issueMyBook=this.bs.getBookItem(this.id);
    });
  }

}
