import { Component } from '@angular/core';
import { WizardService } from '../service/wizard-service';
import { Wizard } from '../class/wizard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  constructor(private service: WizardService, private activeRoute: ActivatedRoute) { }

  wizard: Wizard[]
  wizardList: Wizard[]

  ngOnInit(): void {

    let name = this.activeRoute.snapshot.params['name']
    this.service.findByName(name).subscribe(
      wizards => this.wizardList = wizards)
  }
}
