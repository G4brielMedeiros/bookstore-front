import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Category } from "./category.model";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Category[]> {
    const url = `${this.baseUrl}/categories`;
    return this.http.get<Category[]>(url);
  }

  findById(id: String): Observable<Category> {
    const url = `${this.baseUrl}/categories/${id}`
    return this.http.get<Category>(url)
  }

  create(category: Category): Observable<Category>{
    const  url = `${this.baseUrl}/categories`
    return this.http.post<Category>(url, category);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/categories/${id}`
    return this.http.delete<void>(url)
  }

  update(category: Category): Observable<void> {
    const url = `${this.baseUrl}/categories/${category.id}`
    return this.http.put<void>(url, category)
  }

  messsage(str: String): void {
    this._snack.open(`${str}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 3000
    })
  }





}
