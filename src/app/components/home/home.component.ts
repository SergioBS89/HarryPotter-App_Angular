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

  ngOnInit(): void {
    console.log(this.service.lastPosition)  
    console.log(this.service.urlToBack)  
    if(this.router.url == "/"){
      document.getElementById('wander').classList.remove("wander")
      document.getElementById('wander').classList.add("noWander")
    }
  }

  //ROUTING
  seeDescription(url: string) {
    this.router.navigate(['/desc/' + url]);
  }
}