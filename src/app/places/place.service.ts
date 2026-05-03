import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from './place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  constructor(private htpp: HttpClient) {}

  save(place: Place) : Observable<Place>{
    return this.htpp.post<Place>('http://localhost:3000/places', place);
  }
  
  getAll(): Observable<Place[]>{
    return this.htpp.get<Place[]>('http://localhost:3000/places');
  }
}
