import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from './place';

@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  constructor(private http: HttpClient) {}

  baseUrl:string = 'http://localhost:3000/places';

  save(place: Place) : Observable<Place>{
    return this.http.post<Place>(this.baseUrl, place);
  }
  
  getAll(): Observable<Place[]>{
    return this.http.get<Place[]>(this.baseUrl);
  }

  filter(name:string, category: string): Observable<Place[]>{
    let params = new HttpParams();

    if(name){
      params = params.set('nome_like',name);
    }

    if(category && category !== '-1'){
      params = params.set('category',category);
    }

    return this.http.get<Place[]>(this.baseUrl,{
      params
    })
  } 
}
