import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { bookService } from '../book.service';
import { book } from '../books/book.model';
import { Category } from '../Category.model';
import { DataStorageService } from '../dataStorage.service';
import { AuthService } from '../auth.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
id:number;
category:Category[];
@Input() issueMyBook:book;
@Output() navLink=new EventEmitter<string>();

LoggedIn=false;
  onNavigate(link:string){
  this.navLink.emit(link);
  }
  constructor(private route:ActivatedRoute,private bs:bookService,private dataStore:DataStorageService
  ,private authServe:AuthService) { }
  username:string;
  ngOnInit() {
    this.bs.emitName.subscribe((name:string)=>{
      this.username=name;
    });
    console.log(this.username);
    this.category=this.bs.getCategory();
this.bs.emitLogin.subscribe((data:boolean)=>{
  this.LoggedIn=data;
});

  }
  
  onSaveData() {
      this.dataStore.storeBooks()
        .subscribe(
          (response:Response) => {
            console.log(response);
          }
        );
    }
  
    onFetchData() {
      this.dataStore.getBooks();
    }
  
    onLogout() {
      this.authServe.logout();
    }
  
    isAuthenticated() {
      return this.authServe.isAuthenticated();
    }
  }
  

 


