import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { bookService } from '../../../book.service';
import { book } from '../../../books/book.model';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})
export class IssuedBooksComponent implements OnInit {
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
