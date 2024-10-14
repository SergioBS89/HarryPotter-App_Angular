import { Component, Input } from '@angular/core';
import { ObjectsService } from '../service/objects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from 'src/app/whole-project/general.enum';
import { Wizard } from '../../wizard/class/wizard';

@Component({
  selector: 'app-description',
  templateUrl: './descriptionObject.component.html',
  styleUrls: ['./descriptionObject.component.css']
})
export class DescriptionObjectComponent {

  constructor(
    private service: ObjectsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  @Input()
  description: any
  objectList: Object[] = [];
  isHome: boolean = false
  nameWizard: any;
  shortcodeToDifferentCategory = Routes.GO_BACK_FROM_SCREEN_OBJECTS

  /**
   * Description routes
   */
  wanderRoute = Routes.WANDER_DESC
  horocruxRoute = Routes.HOROCRUXES_DESC
  reliquesRoute = Routes.RELIQUES_DESC
  quiddichRoute = Routes.QUIDDICH_DESC
  otherObjectsRoute = Routes.OTHER_OBJECTS_DESC

  ngOnInit(): void {

    let param = this.activeRoute.snapshot.params['name'];
    this.service.findMagicObjectsByName(param).subscribe((object) => {
      console.log(object)
      this.objectList.push(object);
    });
  }


  //Prueba para obetner hipervinculo desde texto
  goFromText(text: string) {
    this.router.navigate(['http://localhost:4200/desc/' + text])
  }
}
