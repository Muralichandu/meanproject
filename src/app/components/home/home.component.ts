import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _auth:AuthService,public _router:Router) { }
  img:any =[]
  

  ngOnInit(): void {
    this._auth.dashboard().subscribe(res => this.img = res,
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/login'])
          }
        }
      })
  }

}
