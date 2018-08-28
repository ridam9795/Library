import { Component, OnInit } from '@angular/core';
import { book } from '../book.model';
import { ActivatedRoute, Params } from '@angular/router';
import { bookService } from '../../book.service';

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.css']
})
export class CompDetailsComponent implements OnInit {
book:book;
id:number;
link=[
  "https://drive.google.com/open?id=0B51JhO0eWckoS2phOExESENoUjQ",
  "https://drive.google.com/open?id=0B51JhO0eWckoOTFtZFZMZlJ6Zk0",
  "https://drive.google.com/open?id=0B51JhO0eWckoeElTUkRBa3BfV2M"
];
  constructor(private route:ActivatedRoute,private bs:bookService) { }

  ngOnInit() {

    this.route.params.subscribe((param:Params)=>{
      this.id= +param['id'];
      this.book=this.bs.getMyBooksItem(this.id);

    })
   
  }

}
