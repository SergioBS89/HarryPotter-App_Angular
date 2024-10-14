import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Creature } from '../class/creature';
import { map } from 'rxjs';
import { Routes } from 'src/app/whole-project/general.enum';

@Injectable({
  providedIn: 'root'
})
export class CreaturesService {

  constructor(private http: HttpClient) { }

  private urlEnpointCreatures: string

  /**
   * Function that returns a list 
   */
  findCreatures(page: number, category: Routes): Observable<any> {

    switch (category) {
      case Routes.DANGER_CREATURES:
        this.urlEnpointCreatures = 'http://localhost:8080/creatures/danger/' + page
        break;
      case Routes.NO_DANGER_CREATURES:
        this.urlEnpointCreatures = 'http://localhost:8080/creatures/nodanger/' + page
        break;
      default:
        break;
    }
    return this.http
      .get(this.urlEnpointCreatures)
      .pipe(
        map(response => response as Creature[]
        )
      )
  }

  /**
   * Function to retrieve a creature by raze(name)
   */
  findByRaze(raze: string): Observable<any> {
    return this.http.get('http://localhost:8080/creatures/' + raze)
    .pipe
    (map(response => response as Creature[])
    )
  }
}