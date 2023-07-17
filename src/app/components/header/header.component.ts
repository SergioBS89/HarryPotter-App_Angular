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

  }

  goTo(category : string){

    this.router.navigate(['/'+ category])
  }
  }

