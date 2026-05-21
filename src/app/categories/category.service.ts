import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: string = environment.apiUrl + '/categories';

  constructor(private http: HttpClient) { }

  save(category: Category) : Observable<Category>{
    return this.http.post<Category>(this.apiUrl, category)
  }

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)
  }
}
