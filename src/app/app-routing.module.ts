import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BooksComponent } from './books/books.component';
import { IssueBooksComponent } from './book-issue/issue-books/issue-books.component';
import { BookDetailsComponent } from './Books/book-details/book-details.component';
import { BookListComponent } from './Books/book-list/book-list.component';
import { HeaderComponent } from './header/header.component';
import { BookStartComponent } from './books/book-start/book-start.component';
import { IssuedBooksComponent } from './book-issue/issue-books/issued-books/issued-books.component';
import { CategoryComponent } from './books/category/category.component';
import { BookDisplayComponent } from './books/book-list/book-display/book-display.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CompDetailsComponent } from './books/comp-details/comp-details.component';
import { NewBookComponent } from './books/new-book/new-book.component';
const appRoute:Routes=[
{path:'',redirectTo:'/books',pathMatch:'full'},
{  path:'books',component:BooksComponent ,children:[
    {path:'new',component:NewBookComponent},

    {path:':id',component:CompDetailsComponent}
] },

{  path:'bookIssued',component:IssueBooksComponent,children:[
    {path:':id',component:IssuedBooksComponent},
]},
{path:'sign-up',component:SignUpComponent},
{path:'login',component:LoginComponent},
{path:'bookList/:id',component:CategoryComponent,children:[
    {path:'new',component:NewBookComponent},
    {path:':id',component:BookDetailsComponent}

]},

];
@NgModule({
imports:[RouterModule.forRoot(appRoute)],
exports:[RouterModule]
})
export class AppRoutingModule{

}