import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Wizard } from '../class/wizard';
import { Family } from '../class/family';
import { Routes } from 'src/app/whole-project/general.enum';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  constructor(private http: HttpClient) { }

  /**
   * Wizards categories
   */
  teachersCategory = Routes.TEACHERS
  studentsCategory = Routes.STUDENTS
  mortifagosCategory = Routes.MORTIFAGOS
  otherWizardsCategory = Routes.OTHERS_WIZ
  animalsFantasticsCategory = Routes.ANIMALS_FANTASTICS


  private urlEnpointWizards : string;
  private urlEnpointFamily = "http://localhost:8080/wizards/search/family/"

  findAll(page: number, category: Routes): Observable<any> {

    switch (category) {
      case this.animalsFantasticsCategory:
        this.urlEnpointWizards = "http://localhost:8080/wizards/animals/"
        break;
      case this.otherWizardsCategory:
        this.urlEnpointWizards = "http://localhost:8080/wizards/others/"
        break;
      case this.mortifagosCategory:
        this.urlEnpointWizards = "http://localhost:8080/wizards/mortifagos/"
        break;
      case this.studentsCategory:
        this.urlEnpointWizards = "http://localhost:8080/wizards/students/"
        break;
      case this.teachersCategory:
        this.urlEnpointWizards = "http://localhost:8080/wizards/teachers/"
        break;
      default:
        break;
    }
    return this.http
      .get(this.urlEnpointWizards + page)
      .pipe(
        map((response: any) => {
          return response as Wizard[]
        }));
  }

  findByName(name: string): Observable<Wizard> {
    return this.http.get<Wizard>('http://localhost:8080/wizards/' + name)
  }

  findAllCoincidences(name: string): Observable<any> {
    return this.http.get<Wizard>('http://localhost:8080/wizards/search/searching/' + name)
  }

  findFamilyByName(name: String): Observable<Family> {
    return this.http.get<Family>(`${this.urlEnpointFamily}${name}`).pipe(
      catchError(error => {
        return throwError('Nothing found as family for this wizard');
      })
    );
  }
}
