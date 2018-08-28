import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private authServe:AuthService){}
  siggendUp=false;
  onSignup(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
  this.authServe.sighUp(email,password);
  this.siggendUp=true;
  }
ngOnInit(){

}
}
