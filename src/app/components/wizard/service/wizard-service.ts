import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Wizard } from '../class/wizard';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  constructor(private http: HttpClient) { }

  private urlEnpoint = "http://localhost:8080/wizards"
  urlArray:string[]=[] //This array save all the routes 
  lastPosition = this.urlArray[this.urlArray.length-1]
  urlToBack = this.urlArray[this.urlArray.length-2]
  
  findAll() : Observable<Wizard[]>{
    /* There are two ways to get an observable from the api:
    Option 1:                                                          
    return this.http.get<Client[]>(this.findAllEnpoint)
    Option 2:                                             */
    return this.http.get(this.urlEnpoint).pipe(
      map(response => response as Wizard[])
    )
  }

  findByName(name: string) : Observable<Wizard>{
    return this.http.get<Wizard>(this.urlEnpoint + "/" + name)
  }


}
