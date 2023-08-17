import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Creature } from '../class/creature';
import { map } from 'rxjs';
import { GeneralEnum } from 'src/app/whole-project/general.enum';

@Injectable({
  providedIn: 'root'
})
export class CreaturesService {

  constructor(private http: HttpClient) { }

  private urlEnpointCreatures: string 

  /**
   * Function that returns a list 
   */
  findCreatures(page: number, category: GeneralEnum): Observable<any> {

    switch (category) {
      case GeneralEnum.ALL_CREATURES:
        this.urlEnpointCreatures = 'http://localhost:8080/creatures/pages/' + page
        break;
      case GeneralEnum.DANGER_CREATURES:
        this.urlEnpointCreatures = 'http://localhost:8080/creatures/danger'
        break;
      case GeneralEnum.NO_DANGER_CREATURES:
        this.urlEnpointCreatures = 'http://localhost:8080/creatures/no-danger'
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
}