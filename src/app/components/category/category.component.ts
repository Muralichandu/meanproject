import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {CategoryService} from 'src/app/shared/category.service';
import {ConfirmationService,MessageService} from 'primeng/api';
import {Router} from '@angular/router'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:any = [];
  currentproduct:any = [];
  constructor(public categoriesService:CategoryService,
    public messageService: MessageService,
    public confirmationService: ConfirmationService,
    public router: Router
    
    ) { }

  ngOnInit(): void {
    this._getCategories();
    
  }
  private _getCategories() {
    this.categoriesService.getCategories().subscribe((cats) => {
      this.categories = cats;
      console.log(cats)
    });
  }

  // deleteCategory():void{
  //   this.categoriesService.deleteCategory(this.currentproduct.id)
  //   .subscribe(
  //     response => {
  //       console.log(response);
  //       this.router.navigate(['/products']);
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }
  deleteCategory(categoryId:string){

    this.categoriesService.deleteCategory(categoryId).subscribe(
      () => {
        this._getCategories();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Category is deleted!'
        });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Category is not deleted!'
        });
      }
    );
  }
  
  updateCategory(categoryid: string) {
    console.log('hel')
    this.router.navigateByUrl(`categories/form/${categoryid}`);
  }

  
}
