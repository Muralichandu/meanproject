import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router'
import {CategoryService} from 'src/app/shared/category.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router'
import { Category } from 'src/app/model/category';
import {ConfirmationService,MessageService} from 'primeng/api';
import {timer} from 'rxjs'
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  form:any= FormGroup;
  editmode = false;
  isSubmitted = false;
  currentCategoryId : any;
  constructor(
    private categoriesService: CategoryService,
    private router:Router,
    private formbuilder:FormBuilder,
    public messageService: MessageService,
    public confirmationService: ConfirmationService,
    private location:Location,
    private route:ActivatedRoute) { }
  CategoryData = {
    ProductName: '',
    Brand: '',
    Quantity:'',
    Price:'',
    color:''
  }
  ngOnInit(): void {
    // this.form = new  FormGroup({

    //   ProductName:new FormControl('',[Validators.required]),
    //   Brand:new FormControl('',[Validators.required]),
    //   color:new FormControl('',[Validators.required]),
    //   Quantity:new FormControl('',[Validators.required]),
    //   Price:new FormControl('',[Validators.required])

    // })
    this.form = this.formbuilder.group({
      ProductName: ['', Validators.required],
      Brand: ['', Validators.required],
      color: [''],
      Quantity:['',Validators.required],
      Price:['',Validators.required]

    });
    this._checkmode()

  }
  onSubmit(){
    
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    const category: Category = {
      id: this.currentCategoryId,
      ProductName: this.categoryForm.ProductName.value,
      Brand: this.categoryForm.Brand.value,
      Quantity: this.categoryForm.Quantity.value,
      Price:this.categoryForm.Price.value,
      color:this.categoryForm.color.value
    };

    if (this.editmode) {
      this._updateCategory(category);
    } else {
      this._addCategory(category);
    }
   
   this.router.navigate(['/category'])
  }

  private _addCategory(category: Category){
    this.categoriesService.createCategory(category)
    .subscribe(
     ( category: Category) => {
       this.messageService.add({
         severity: 'success',
         summary: 'Success',
         detail: `Category ${category.ProductName} is created!`
       });
    
     },
     () => {
       this.messageService.add({
         severity: 'error',
         summary: 'Error',
         detail: 'Category is not deleted!'
       });
     }
    )

  }

  _updateCategory(category: Category){

    this.categoriesService.updateCategory(category)
    .subscribe(
     () => {
     
       this.messageService.add({
         severity: 'success',
         summary: 'Success',
         detail: 'Category is Created!'
       });
     },
     () => {
       this.messageService.add({
         severity: 'error',
         summary: 'Error',
         detail: 'Category is not deleted!'
       });
     }
    )
  }
private _checkmode(){
this.route.params.subscribe((params) => {
if(params.id){
this.editmode = true;
this.currentCategoryId = params.id
this.categoriesService.getCategory(params.id).subscribe(category =>{
  this.categoryForm.ProductName.setValue(category.ProductName);
  this.categoryForm.Quantity.setValue(category.Quantity);
  this.categoryForm.Brand.setValue(category.Brand);
  this.categoryForm.Price.setValue(category.Price);

})

}
})
}
get categoryForm() {
  return this.form.controls;
}
   
}
