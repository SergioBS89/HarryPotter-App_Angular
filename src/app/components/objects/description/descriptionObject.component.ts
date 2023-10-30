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
  listOwnersWanders: Wizard[] = []
  showOwnerWander: boolean = false
  comeBack = Routes.COMEBACK_OBJECTS_DESC

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

    if (this.checkIfUrlContainsCharacters(this.wanderRoute)) {
      this.service.findWanderByName(param).subscribe((wander) => {
        this.objectList.push(wander);
        wander.owner.forEach(element => {
          this.listOwnersWanders.push(element)
        });
      });        
      this.showOwnerWander = true    
    }
    if (this.checkIfUrlContainsCharacters(this.horocruxRoute)) {
      this.service.findHorocruxesByName(param).subscribe((horocruxes) => {
        this.objectList.push(horocruxes);
      });
    }
    if (this.checkIfUrlContainsCharacters(this.reliquesRoute)) {
      this.service.findReliqesByName(param).subscribe((reliques) => {
        this.objectList.push(reliques);
      });
    }
    if (this.checkIfUrlContainsCharacters(this.quiddichRoute)) {
      this.service.findQuiddichByName(param).subscribe((quiddich) => {
        this.objectList.push(quiddich);
      });
    }
    if (this.checkIfUrlContainsCharacters(this.otherObjectsRoute)) {
      this.service.findOthersByName(param).subscribe((others) => {
        this.objectList.push(others);
      });
    }
  }

  /**
   * 
   * @param descriptionRoute Function than check if some characters are include in the url
   * @returns 
   */
  checkIfUrlContainsCharacters(descriptionRoute: Routes): boolean {
    return this.router.url.includes(descriptionRoute.toString())
  }

  goToWizardDescription(nameWizard : string) {
    this.router.navigate(['/desc/' + nameWizard])
  }

  //Prueba para obetner hipervinculo desde texto
  goFromText(text: string) {
    this.router.navigate(['http://localhost:4200/desc/' + text])
  }
}
