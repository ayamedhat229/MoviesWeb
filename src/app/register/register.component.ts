import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
//reactive form
registerForm:FormGroup = new FormGroup({
  'userName':new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
 /* 'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  'age':new FormControl(null,[Validators.required,Validators.min(10),Validators.max(70)]),*/
  'email':new FormControl(null,[Validators.required,Validators.email]),
  'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)]),
  'confirmPassword':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)]),
})
submitForm(){
  if(this.registerForm.invalid){
    return;
  }
 //console.log(this.registerForm.value);
 this._AuthService.register(this.registerForm.value).subscribe((data)=>{
  if(data.message=='done'){
   this._Router.navigateByUrl('/login')
  }
  else{
    alert('notmessage')
  }
  console.log(data);
 })
}

  constructor(private _AuthService:AuthService,private _Router:Router){}
  ngOnInit(): void{

  }
}

