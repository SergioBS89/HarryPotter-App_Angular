import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from 'src/app/whole-project/general.enum';
import { GeneralService } from 'src/app/whole-project/general.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router, private generalService : GeneralService, private location : Location) { }

  @Input()
  isHome: boolean = true; //Value to hide/show shortcuts buttons in header (To go to another components)
  @Input()
  shortcodeToDifferentCategory: Routes; //Value to hide/show different header depending which screen is active

  /**
   * List of variables to set the button come back 
   */
  wizardScreenActive = Routes.GO_BACK_FROM_SCREEN_WIZARDS
  objectsScreenActive = Routes.GO_BACK_FROM_SCREEN_OBJECTS
  creaturesScreenActive = Routes.GO_BACK_FROM_SCREEN_CREATURES
  mortifagosScreenActive = Routes.GO_BACK_FROM_SCREEN_MORTIFAGOS

  /**
   * Routes for function go()
   */
  goToWizardsCategories = Routes.WIZARDS_CATEGORIES
  goToObjectsCategories = Routes.OBJECTS_CATEGORIES
  goToCreaturesCategories = Routes.CREATURES_CATEGORIES
  goToMortifagosCategories = Routes.MORTIFAGOS_CATEGORIES


  ngOnInit() {
  }

  /**
   * This function checks if the current screen displays description component or any list, then it navigates to the previous url 
   * @param url value to get the route to use in navigate 
   * @param isDescriptionScreenActive boolean to check if the component description is displayed
   */
  goTo(url: string, isDescriptionScreenActive: boolean) {
    if (isDescriptionScreenActive) {
      if(this.generalService.urlArray.length == 0){
        this.router.navigate(['/'])
      } 
      console.log(this.generalService.urlArray[0])
      this.router.navigate([this.generalService.urlArray[0]])
      this.generalService.urlArray.pop()
      console.log('Borrado:' + this.generalService.urlArray[0])
    } 
    else {
      console.log(this.generalService.urlArray[0])
      this.router.navigate(['/' + url])
      this.generalService.urlArray.pop()
      console.log('Borrado:' + this.generalService.urlArray[0])
    }
  }

  goBack(): void {
    this.location.back();
  }
}

