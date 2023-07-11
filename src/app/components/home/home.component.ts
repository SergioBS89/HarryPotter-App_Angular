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

  constructor(private service: WizardService, private router: Router) {}

  wizardList: Wizard[] = [];
  currentRoute: string = '';


  //ROUTING
  seeDescription(url: string) {
    this.router.navigate(['/desc/' + url]);
  }
}
