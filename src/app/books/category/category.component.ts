import { Component, OnInit } from '@angular/core';
import { Category } from '../../Category.model';
import { bookService } from '../../book.service';
import { book } from '../book.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  id:number;
  books:book[];
  category:Category[];
  constructor(private route:ActivatedRoute,private bs:bookService) { }
 
  ngOnInit() {
    this.route.params.subscribe((param:Params)=>{
      this.id= +param['id'];
    });
    this.books=this.bs.getBooks();
    this.category=this.bs.getCategory();
  }

}
