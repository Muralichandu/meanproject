import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from 'src/app/shared/auth.service';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public _auth:AuthService,public _route:Router){}
  canActivate() : boolean{
 if(this._auth.isLoggedIn()){
return true;
 }
 else{
   this._route.navigate(['/login'])
   return false;
 }
  }
  
}
