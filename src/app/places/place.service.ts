import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from './place';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  apiUrl: string = environment.apiUrl + '/places';

  constructor(private http: HttpClient) {}

  save(place: Place) : Observable<Place>{
    return this.http.post<Place>(this.apiUrl, place);
  }
  
  getAll(): Observable<Place[]>{
    return this.http.get<Place[]>(this.apiUrl);
  }

  filter(name:string, category: string): Observable<Place[]>{
    let params = new HttpParams();

    if(name){
      params = params.set('nome_like',name);
    }

    if(category && category !== '-1'){
      params = params.set('category',category);
    }

    return this.http.get<Place[]>(this.apiUrl,{
      params
    })
  } 
}
