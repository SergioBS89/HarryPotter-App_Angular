import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Wizard } from '../class/wizard';
import { Family } from '../class/family';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  constructor(private http: HttpClient) { }

  private urlEnpointWizards = "http://localhost:8080/wizards"
  private urlEnpointFamily = "http://localhost:8080/family"
  urlArray:string[]=[] //This array save all the routes 
  
  findAll() : Observable<Wizard[]>{
    /* There are two ways to get an observable from the api:
    Option 1:                                                          
    return this.http.get<Client[]>(this.findAllEnpoint)
    Option 2:                                             */
    return this.http.get(this.urlEnpointWizards).pipe(
      map(response => response as Wizard[])
    )
  }

  findByName(name: string) : Observable<Wizard>{
    return this.http.get<Wizard>(this.urlEnpointWizards + "/" + name)
  }

  findFamilyByName(name: String) : Observable<Family>{
    return this.http.get<Family>(`${this.urlEnpointFamily}/${name}`)    
  }


}
