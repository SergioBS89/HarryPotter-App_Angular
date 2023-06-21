import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { WizardService } from '../wizard/service/wizard-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private service: WizardService, private router: Router) {}

  ngOnInit() {
    //Checking if array url's are empty to disply the wander
    if (this.service.urlArray.length == 0) {
      let wander = document.getElementById('wander');
      wander.classList.toggle('noWander');
    }
  }

  //ROUTING
  goBack() {    
    if(this.router.url == '/wizards'){
      this.service.urlArray = []
      this.router.navigate(['/'])
    }   
    this.service.urlArray.pop()
      this.router.navigate([this.service.urlArray[this.service.urlArray.length - 1]]);   
      console.log(this.service.urlArray[this.service.urlArray.length - 1])
    }
  }

