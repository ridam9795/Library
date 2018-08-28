import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { bookService } from '../book.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn=false;
  forgetPass=false;
  name:string;
constructor(private authServe:AuthService,private bs:bookService){}
  onLogin(form:NgForm){
    this.loggedIn=true;
    console.log("logged in");
    const email=form.value.email;
       const password=form.value.password;
       this.authServe.loginUser(email,password);
       console.log(email);
       this.name=email.split('@')
this.bs.emitName.emit(name);
  }
  resetPassword(email: string) {
    this.forgetPass=true;
    this.authServe.resetPassword(email)
  }
ngOnInit(){

}

}
