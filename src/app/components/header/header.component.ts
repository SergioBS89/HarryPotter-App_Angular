import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralEnum } from 'src/app/whole-project/general.enum';
import { GeneralService } from 'src/app/whole-project/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router, private generalService : GeneralService) { }

  @Input()
  isHome: boolean = true; //Value to hide/show shortcuts buttons in header
  @Input()
  comeBack: GeneralEnum; //Value to hide/show different header depending which screen is active

  /**
   * List of variables to set the button come back 
   */
  wizardScreenActive = GeneralEnum.COMEBACK_WIZARDS
  wizardScreenDescActive = GeneralEnum.COMEBACK_WIZARDS_DESC
  objectsScreenActive = GeneralEnum.COMEBACK_OBJECTS
  objectsScreenDescActive = GeneralEnum.COMEBACK_OBJECTS_DESC
  creaturesScreenActive = GeneralEnum.COMEBACK_CREATURES
  creaturesScreenDescActive = GeneralEnum.COMEBACK_CREATURES_DESC
  placesScreenActive = GeneralEnum.COMEBACK_PLACES
  placesScreenDescActive = GeneralEnum.COMEBACK_PLACES_DESC

  /**
   * Routes for function go()
   */
  goToWizardsCategories = GeneralEnum.WIZARDS_CATEGORIES
  goToObjectsCategories = GeneralEnum.OBJECTS_CATEGORIES
  goToCreaturesCategories = GeneralEnum.CREATURES_CATEGORIES
  goToPlacesCategories = GeneralEnum.PLACES_CATEGORIES


  ngOnInit() {
  }

  /**
   * This function checks if the current screen displays description component or any list, then it navigates to the previous url 
   * @param url value to get the route to use in navigate 
   * @param isDescriptionScreenActive boolean to check if the component description is displayed
   */
  goTo(url: string, isDescriptionScreenActive: boolean) {
    if (isDescriptionScreenActive) {
      this.router.navigate([this.generalService.urlArray[0]])
      this.generalService.urlArray.pop()
    } else {
      this.router.navigate(['/' + url])
    }
  }
}

