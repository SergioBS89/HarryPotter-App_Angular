import { Component } from '@angular/core';
import { WizardService } from './service/wizard-service';
import { Wizard } from './class/wizard';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {

  constructor(private service:WizardService){}

  wizardList :Wizard[] = []
  

    
  ngOnInit(): void {
    this.service.findAll().subscribe(
      wizards => this.wizardList = wizards)
}
}
