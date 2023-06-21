import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wizard } from '../wizard/class/wizard';
import { WizardService } from '../wizard/service/wizard-service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {
  constructor(
    private service: WizardService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}


  currentRoute: string = '';

  ngOnInit(): void {

    //Current route
    this.currentRoute = this.router.url;
    this.service.urlArray.push(this.currentRoute);

    // console.log(this.service.urlArray.length)  
    // for (let i = 0; i < this.service.urlArray.length; i++) {
      console.log(this.service.urlArray)        
    // }
    
  }
}
