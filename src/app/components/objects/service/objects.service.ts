import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Objects } from '../class/objects';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  constructor(private http: HttpClient) { }

  private urlEnpointObjects = "http://localhost:8080/objects"

  /**
   * Function that returns a list 
   */
  findHorocruxes(): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects + '/horocruxes')
      .pipe(
        map(response => response as Objects[]
        )
      )
  }

  /**
   * Function that returns an object by name 
   */
  findHorocruxesByName(name: string): Observable<Objects> {
    return this.http.get<Objects>(this.urlEnpointObjects + "/horocruxes/" + name)
  }

  /**
   * Function that returns a list 
   */
  findWanders(page: number): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects + '/wanders/' + page)
      .pipe(
        map((response: any) => {
          return response as Objects[]
        }));
  }

  /**
   * Function that returns an object by name 
   */
  findWanderByName(name: string): Observable<Objects> {
    return this.http.get<Objects>(this.urlEnpointObjects + "/wander/" + name)
  }

  /**
   * Function that returns a list 
   */
  findReliques(): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects + '/reliques')
      .pipe(
        map(response => response as Objects[]
        )
      )
  }

  /**
   * Function that returns an object by name 
   */
  findReliqesByName(name: string): Observable<Objects> {
    return this.http.get<Objects>(this.urlEnpointObjects + "/reliques/" + name)
  }

  /**
   * Function that returns a list 
   */
  findQuiddichObjects(): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects + '/quiddich')
      .pipe(
        map(response => response as Objects[]
        )
      )
  }

  /**
   * Function that returns an object by name 
   */
  findQuiddichByName(name: string): Observable<Objects> {
    return this.http.get<Objects>(this.urlEnpointObjects + "/quiddich/" + name)
  }

  /**
   * Function that returns a list 
   */
  findOthersObjects(page: number): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects + '/others/' + page)
      .pipe(
        map((response: any) => {
          return response as Objects[]
        }));
  }

  /**
   * Function that returns an object by name 
   */
  findOthersByName(name: string): Observable<Objects> {
    return this.http.get<Objects>(this.urlEnpointObjects + "/other-object/" + name)
  }
}
