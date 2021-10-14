import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {AuthService} from 'src/app/shared/auth.service'
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(public injector:Injector) { }

 intercept(req:any,next:any){
 let authService = this.injector.get(AuthService)
   let tokenizedRequest  = req.clone({
     
      setHeaders:{
        authorization: `Bearer ${authService.getToken()}`
      }
     
   })
   return next.handle(tokenizedRequest)
 }

}
