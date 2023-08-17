import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralEnum } from 'src/app/whole-project/general.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

   /**
   * Routes for function go()
   */
   wizardsCategories = GeneralEnum.WIZARDS_CATEGORIES
   objectsCategories = GeneralEnum.OBJECTS_CATEGORIES
   creaturesCategories = GeneralEnum.CREATURES_CATEGORIES
   placesCategories = GeneralEnum.PLACES_CATEGORIES

  /**
   * Variables to display HTML screens
   */
  displayHomeMainScreen: boolean;
  displayWizardHomeScreen: boolean;
  displayObjectsHomeScreen: boolean;
  displayCreaturesHomeScreen: boolean;
  displayPlacesHomeScreen: boolean;
 
  ngOnInit(): void {

    /**
     * Get the current route and set the value as true of the correct HTML
     */
 
    switch (this.router.url) {
      case '/':
        this.displayHomeMainScreen = true
        break;
      case '/' + this.wizardsCategories:
        this.displayWizardHomeScreen = true
        break;
      case '/' + this.creaturesCategories:
        this.displayCreaturesHomeScreen = true
        break;
      case '/' + this.placesCategories:
        this.displayPlacesHomeScreen = true
        break;
      case '/' + this.objectsCategories:
        this.displayObjectsHomeScreen = true
        break;
      default:
        break;
    }
  }

  /**
   * Function to navigate to differents routes
   * @param url 
   */
  goTo(url: string) {
    this.router.navigate(['/' + url]);
  }

}
