import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Category } from '../model/category';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public _http:HttpClient) { }
   baseURL = 'http://localhost:3000/api/v1/categories/';

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>('http://localhost:3000/api/v1/categories');
  }
  createCategory(category: Category): Observable<Category> {
    return this._http.post<Category>('http://localhost:3000/api/v1/categories', category);
  }
  getCategory(categoryId: string): Observable<Category> {
    return this._http.get<Category>(`http://localhost:3000/api/v1/categories/${categoryId}`);
  }
  deleteCategory(categoryId: string): Observable<any> {
    return this._http.delete<any>(`http://localhost:3000/api/v1/categories/${categoryId}`);
  }
  updateCategory(category: Category): Observable<Category> {
    return this._http.put<Category>(`http://localhost:3000/api/v1/categories/${category.id}`, category);
  }


 
}
