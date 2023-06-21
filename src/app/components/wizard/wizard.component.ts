import { Component } from '@angular/core';
import { WizardService } from './service/wizard-service';
import { Wizard } from './class/wizard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent {
  constructor(private service: WizardService, private router: Router) {}

  wizardList: Wizard[] = [];
  currentRoute: string = '';

  ngOnInit(): void {
    this.service.findAll().subscribe((wizards) => (this.wizardList = wizards));

    //Current route
    this.currentRoute = this.router.url;
      this.service.urlArray.push(this.currentRoute);

      console.log(this.service.urlArray.length)  
      for (let i = 0; i < this.service.urlArray.length; i++) {
        console.log(this.service.urlArray)
        
      }
      // console.log(this.service.urlToBack.length) 

        //Checking if array url's are empty to display the wander
    if (this.router.url != "/") {
      document.getElementById('wander').classList.remove('noWander');
      document.getElementById('wander').classList.add('wander');
    }

    for (let index = 0; index < this.currentRoute.length; index++) {
      
  }
  }

  //It goes to description screen
  seeDescription(url: string) {
    this.router.navigate(['/desc/' + url]);
  }
}
