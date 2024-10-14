import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from 'src/app/whole-project/general.enum';

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
   wizardsCategories = Routes.WIZARDS_CATEGORIES
   objectsCategories = Routes.OBJECTS_CATEGORIES
   creaturesCategories = Routes.CREATURES_CATEGORIES
   mortifagosCategories = Routes.MORTIFAGOS_CATEGORIES

  /**
   * Variables to display HTML screens
   */
  displayHomeMainScreen: boolean;
  displayWizardHomeScreen: boolean;
  displayObjectsHomeScreen: boolean;
  displayCreaturesHomeScreen: boolean;
  displayMortifagosHomeScreen: boolean;
 
  ngOnInit(): void {

    /**
     * Get the current route and set the value as true of the correct HTML
     * 
     */
    console.log(this.router.url)
 
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
      case '/' + this.mortifagosCategories:
        this.displayMortifagosHomeScreen = true
        break;
      case '/' + this.objectsCategories:
        this.displayObjectsHomeScreen = true
        break;
      default:
        break;
    }
  }

  //TODO REMOVE THIS CODE IF NOT NEEDED
  /**
   * Function to navigate to differents routes
   * @param url 
   */
  goTo(url: string) {
    this.router.navigate(['/' + url]);
  }

}
