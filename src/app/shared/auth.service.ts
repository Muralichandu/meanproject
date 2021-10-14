import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _http:HttpClient) { }
  public currentUser:any;
  private _registerURL = 'http://localhost:3000/api/v1/users/register'
  private _loginURL = 'http://localhost:3000/api/v1/users/login'
  private _dashboardURL = 'http://localhost:3000/api/v1/users/dashboard'
  registeruser(user:any){
return this._http.post(this._registerURL,user)
  }
  logincategory(user:any) : Observable<User>{
    return this._http.post<User>('http://localhost:3000/api/v1/users/login',user)
  }
  dashboard(){
    return this._http.get(this._dashboardURL)
  }
  isLoggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
   return localStorage.getItem('token')
  }
  setCurrentUser(user:any){
    this.currentUser =  user
  }
}
