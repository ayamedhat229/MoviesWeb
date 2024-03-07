import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject} from 'rxjs';
import { register } from 'module';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any=new BehaviorSubject(null); //not login
  saveData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any =jwtDecode(encodedToken);
    this.userData.next(decodedToken); //login
    console.log(this.userData);
  }

  constructor(private http:HttpClient , private _Router:Router){ 
    if (typeof localStorage !== 'undefined') {
      localStorage.getItem('userToken')
      this.saveData()
    }
  }
    register(registarData:any):Observable<any>{
     return this.http.post('http://localhost:3000/user',registarData)
    }
    login(loginData:any):Observable<any>{
      return this.http.post('http://localhost:3000/user/login',loginData)
     }
     signout(){
      localStorage.removeItem('userToken');
      this.userData.next(null);
      this._Router.navigate(['/login'])
     }
    

}

