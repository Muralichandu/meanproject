import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms'
import {AuthService} from 'src/app/shared/auth.service';
import { Category } from 'src/app/model/category';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any= FormGroup;
  isSubmitted = false;
  constructor(public formbuilder:FormBuilder,
    public userservice:AuthService,public _router:Router) { }


  
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    })
  }
OnSubmit(){
  console.log(this.form.value)
  this.isSubmitted = true;
  if(this.form.invalid){
    return
  }
  const category: Category = {
    
    Username: this.categoryForm.Username.value,
    Password: this.categoryForm.Password.value,

  };
  this.userservice.logincategory(this.form.value)
  .subscribe((res:any) => //console.log(res),
  {
    localStorage.setItem('token',res.token)
  },
  err => console.log(err))
// this._addCategory(category);
this.userservice.setCurrentUser(this.form.Username)
this._router.navigate(['/home'])
}
// private _addCategory(category: Category){
// // this.userservice.logincategory(category).subscribe(res =>console.log(res),err=>console.log(err))
// }
get categoryForm() {
  return this.form.controls;
}
}
