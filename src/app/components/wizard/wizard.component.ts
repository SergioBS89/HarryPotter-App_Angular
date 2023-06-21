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
  constructor(private service: WizardService, private router: Router) { }

  wizardList: Wizard[] = [];
  currentRoute: string = '';

  ngOnInit(): void {
    this.service.findAll().subscribe((wizards) => (this.wizardList = wizards));

    //Current route
    //Route validation to avoid repeat the same url in array routes
    if (this.service.urlArray[this.service.urlArray.length - 1] != this.router.url) {
      this.service.urlArray.push(this.router.url);
    }

    // console.log(this.service.urlArray.length)
    // for (let i = 0; i < this.service.urlArray.length; i++) {
    //   console.log(this.service.urlArray)
    // }

    //Checking if array url's are empty to display the wander
    if (this.router.url != "/") {
      document.getElementById('wander').classList.remove('noWander');
      document.getElementById('wander').classList.add('wander');
    }
  }

  //It goes to description screen
  seeDescription(url: string) {
    this.router.navigate(['/desc/' + url]);
  }
}
