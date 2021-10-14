import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import { AuthService } from './shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  visibleSidebar1:any;
  constructor(public _router:Router,public _authService:AuthService){}
  ngOnInit(){
    
  }
  loggedout(){
    return localStorage.removeItem('token'),
    this._router.navigate(['/login'])
   
  }
}
