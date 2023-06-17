import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Wizard } from '../class/wizard';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  constructor(private http: HttpClient) { }


  /**
   * Enpoint get list of clients
   */
  private findAllEnpoint = "http://localhost:8080/wizards"
  private findByIdEnpoint = "http://localhost:8080/wizards/" 
  /**
     * Get the data json from client.json.ts file
     * @Observable It becomes the data in an observable, it makes the dates reactive and asinchronous
     */
  findAll() : Observable<Wizard[]>{
    /* There are two ways to get an observable from the api:
    Option 1:                                                          
    return this.http.get<Client[]>(this.findAllEnpoint)
    Option 2:                                             */
    return this.http.get(this.findAllEnpoint).pipe(
      map(response => response as Wizard[])
    )
  }

  findByName(name: string) : Observable<Wizard[]>{
    return this.http.get<Wizard[]>(this.findByIdEnpoint+name)
  }
}
