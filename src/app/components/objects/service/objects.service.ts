import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Objects } from '../class/objects';
import { Routes } from 'src/app/whole-project/general.enum';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  constructor(private http: HttpClient) { }

  private urlEnpointObjects;


  findAll(page: number, category: Routes): Observable<any> {

    switch (category) {
      case Routes.WANDERS:
        this.urlEnpointObjects = "http://localhost:8080/objects/wanders/"
        break;
      case Routes.HOROCRUXES:
        this.urlEnpointObjects = "http://localhost:8080/objects/horocruxes/"
        break;
        //TODO change reliques by hollows
      case Routes.RELIQUES:
        this.urlEnpointObjects = "http://localhost:8080/objects/hollows/"
        break;
      case Routes.OTHER_OBJECTS:
        this.urlEnpointObjects = "http://localhost:8080/objects/others-objects/"
        break;
      case Routes.QUIDDICH:
        this.urlEnpointObjects = "http://localhost:8080/objects/quiddich/"
        break;
      default:
        break;
    }
    return this.http
      .get(this.urlEnpointObjects + page)
      .pipe(
        map((response: any) => {
          return response as Objects[]
        }));
  }

  /**
   * Function that returns an object by name 
   */
  findMagicObjectsByName(name: string): Observable<Objects> {
    return this.http.get<Objects>('http://localhost:8080/objects/' + name)
  }

}
