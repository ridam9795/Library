import { book } from "./books/book.model";
import { EventEmitter, OnInit } from "@angular/core";
import { Category } from "./Category.model";
import { Subject } from "rxjs";
import { ArrayType } from "@angular/compiler/src/output/output_ast";

export class bookService implements OnInit{
    public books:book[]=[
        new book("Harry potter And The Socerer's stone","http://www.1zoom.me/big/69/34172-aleni.jpg","Amazing"),
        new book("Harry potter And the Chamber Of Secret","https://images5.alphacoders.com/674/thumb-1920-674448.jpg",""),
        new book("Harry potter And the Prisoner Of Askaban","http://www.sheetmusicnow.com/static/images/image/azkaban.jpg",""),
        new book("Harry potter And The Goblet of fire ","http://www.1zoom.net/prev2/51/50527.jpg",""),
        new book("Harry potter And The Order of Phoenix ","http://wallpapercraze.com/images/wallpapers/harry5-143412.jpeg",""),

      
      ];
public books2=book[1]=[
    new book("Harry potter ","",""),
    new book("Harry potter ","",""),
    new book("Harry potter ","",""),
    new book("Harry potter ","",""),
    new book("Harry potter ","",""),
    new book("Harry potter ","",""),



];

public books3=book[2]=[
  new book("Harry ","",""),
  new book("Harry ","",""),
  new book("Harry ","",""),
  new book("Harry ","",""),
  new book("Harry ","",""),
  new book("Harry ","",""),
  new book("Harry ","",""),
  new book("Harry ","",""),


  
  ];
  public books4=book[3]=[
    new book("Harry ","",""),
    new book("Harry ","",""),
    new book("Harry ","",""),
    new book("Harry ","",""),
    new book("Harry ","",""),
    new book("Harry ","",""),

    
    ];public books5=book[4]=[
        new book("Harry ","",""),
        new book("Harry ","",""),
        new book("Harry ","",""),
        new book("Harry ","",""),
        new book("Harry ","",""),
        new book("Harry ","",""),

      
      ];
      public books6=book[5]=[
        new book("Harry ","",""),
        new book("Harry ","",""),
        new book("Harry ","",""),
        new book("Harry ","",""),
        new book("Harry ","",""),
        new book("Harry ","",""),
        new book("Harry ","",""),

        
        ];

        MyBooks:book[]=[
            new book("The Adventures of Sherlock Holmes","http://www.pdfbooksworld.com/image/cache/catalog/5-250x350.jpg","Arthur Conan Doyle"),
            new book("Harry potter And the Chamber Of Secret","https://images5.alphacoders.com/674/thumb-1920-674448.jpg",""),
            new book("Harry potter And the Prisoner Of Askaban","http://www.sheetmusicnow.com/static/images/image/azkaban.jpg",""),
            new book("Harry potter And The Goblet of fire ","http://www.1zoom.net/prev2/51/50527.jpg",""),
            new book("Harry potter And The Order of Phoenix ","http://wallpapercraze.com/images/wallpapers/harry5-143412.jpeg",""),
            new book("Elce","","fffffffff"),
            new book("Harry potter","","dsdsd"),
            new book("Harry potter","","dsdsd"),
            new book("Harry potter","","asasas"),
            new book("Harry potter","","sasasas"),
            



        ];
category:Category[]=[
  new Category(this.books),
  new Category(this.books2),
  new Category(this.books3),
  new Category(this.books4),
  new Category(this.books5),
  new Category(this.books6)


          
];      
emitName=new EventEmitter<string>();
isEmitted=new EventEmitter<boolean>();
       emitMyId=new EventEmitter<number>();
      emitBookItem=new EventEmitter<book>();
      issueItem=new EventEmitter<book>();
      emitCategory=new EventEmitter<Category>();
      emitLogin=new EventEmitter<boolean>();
      
      ngOnInit(){
      }
getCategory(){
    return this.category;
}
getMyBooks(){
    return this.MyBooks;
}
      getBooks(){
          return this.books;
      }
      addBookItem(bookItem){
        this.MyBooks.push(bookItem);
      }
      setMyBooks(books:book[]){
          this.books=books;
      }
      getBookItem(id:number){
          return this.books[id];
      }
     getMyBooksItem(id:number){
          return this.MyBooks[id];
     }
     categoryIndex:number;
     getCategoryIndex(){
         return this.categoryIndex;
     }
     setCategory(id:number){
this.categoryIndex=id;
     }
     
}