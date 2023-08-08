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

  private urlEnpointWizards = "http://localhost:8080/wizards/"
  private urlEnpointFamily = "http://localhost:8080/wizards/family"

  urlArray:string[]=[] //This array save all the routes 

  findAll(page : number): Observable<any> {
    return this.http
      .get(this.urlEnpointWizards + 'pages/' + page)
      .pipe(
        map((response : any) => {
          return response as Wizard[]
        }));
  }

  findByName(name: string) : Observable<Wizard>{
    return this.http.get<Wizard>(this.urlEnpointWizards + name)
  }

  findAllCoincidences(name: string) : Observable<any>{
    return this.http.get<Wizard>(this.urlEnpointWizards + 'searching/' + name)
  }


  findFamilyByName(name: String) : Observable<Family>{
    return this.http.get<Family>(`${this.urlEnpointFamily}/${name}`)    
  }

  findAnimalsFantastics(page : number): Observable<any> {
    return this.http
      .get(this.urlEnpointWizards + 'animals/' + page)
      .pipe(
        map((response : any) => {
          return response as Wizard[]
        }));
  }
  findMortifagos(page : number): Observable<any> {
    return this.http
      .get(this.urlEnpointWizards + 'mortifagos/' + page)
      .pipe(
        map((response : any) => {
          return response as Wizard[]
        }));
  }


  findStudents(page : number): Observable<any> {
    return this.http
      .get(this.urlEnpointWizards + 'students/' + page)
      .pipe(
        map((response : any) => {
          return response as Wizard[]
        }));
  }

  findTeachers(page : number): Observable<any> {
    return this.http
      .get(this.urlEnpointWizards + 'teachers/' + page)
      .pipe(
        map((response : any) => {
          return response as Wizard[]
        }));
  }

  findOthers(page : number): Observable<any> {
    return this.http
      .get(this.urlEnpointWizards + 'others/' + page)
      .pipe(
        map((response : any) => {
          return response as Wizard[]
        }));
  }
}
