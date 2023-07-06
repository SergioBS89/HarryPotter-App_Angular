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
  }

  //It goes to description screen
  seeDescription(url: string) {
    this.router.navigate(['/desc/' + url]);
  }
}


