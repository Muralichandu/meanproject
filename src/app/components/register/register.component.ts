import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/shared/auth.service';
import {Router} from '@angular/router';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {ConfirmationService,MessageService} from 'primeng/api';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:any = FormGroup;
  isSubmitted = false;
  constructor(public _auth:AuthService,
    public _router:Router,
    public formbuilder:FormBuilder) { }
  Registeruserdata={

  }
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      Username : ['',Validators.required],
      Password : ['',Validators.required],
      Email :['',Validators.required],
       PhoneNumber:['',[Validators.required,Validators.pattern(RegExp("[0-9 ]{12}"))]]
    })
  }
  
  register(){
    console.log(this.form)
    this.isSubmitted = true;
    if(this.form.invalid){
      return ;
    }
    this._auth.registeruser(this.form.value)
    .subscribe(
      (res:any) => //console.log(res),
      localStorage.setItem('token',res.token ),
    err => console.log(err))
this._router.navigate(['/login'])
  }
  get m(){
    return this.form.controls;
  }
  
}
