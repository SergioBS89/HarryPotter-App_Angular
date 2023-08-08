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

  findAll(): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects)
      .pipe(
        map(response => response as Objects[]
        )
      )
  }

  findHorocruxes(): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects + '/horocruxes')
      .pipe(
        map(response => response as Objects[]
        )
      )
  }

  findWanders(): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects + '/wanders')
      .pipe(
        map(response => response as Objects[]
        )
      )
  }

  findReliques(): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects + '/reliques')
      .pipe(
        map(response => response as Objects[]
        )
      )
  }

  findQuiddichObjects(): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects + '/quiddich')
      .pipe(
        map(response => response as Objects[]
        )
      )
  }

  findOthersObjects(page : number): Observable<any> {
    return this.http
      .get(this.urlEnpointObjects + '/others/' + page)
      .pipe(
        map((response : any) => {
          return response as Objects[]
        }));
  }
}
