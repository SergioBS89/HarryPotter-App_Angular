import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { House } from '../class/house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }

  private urlEnpointHouse = "http://localhost:8080/places/houses"

  urlArray:string[]=[] //This array save all the routes 
  
  findAll() : Observable<House[]>{
    return this.http.get(this.urlEnpointHouse).pipe(
      map(response => response as House[])
    )
  }

  findByName(name: string) : Observable<House>{
    return this.http.get<House>(this.urlEnpointHouse + "/" + name)
  }
}
