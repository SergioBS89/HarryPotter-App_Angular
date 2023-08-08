import { Component } from '@angular/core';
import { WizardService } from '../wizard/service/wizard-service';
import { Router } from '@angular/router';
import { Wizard } from '../wizard/class/wizard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  wizardList: Wizard[] = [];
  currentRoute: string = '';
  displaySeccion: string 


  ngOnInit(): void {    

    /**
     * Get the current route to display the correct HTML layout
     */
    let route = this.router.url

    switch (route) {
      case '/':
        this.displaySeccion = 'home'
        break;
      case '/wiz-list':
        this.displaySeccion = 'wizards-list'
        break;
      case '/cre-list':
        this.displaySeccion = 'creatures-list'
        break;
      case '/pla-list':
        this.displaySeccion = 'places-list'
        break;
      case '/obj-list':
        this.displaySeccion = 'objects-list'
        break;
      default:
        break;
    }
  }

  //ROUTING
  goTo(url: string) {
    this.router.navigate(['/' + url]);
  }

}
