import { Component } from '@angular/core';
import { WizardService } from '../service/wizard-service';
import { Wizard } from '../class/wizard';
import { ActivatedRoute, Router } from '@angular/router';
import { Family } from '../class/family';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  constructor(
    private service: WizardService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  wizardList: Wizard[] = [];
  membersFamily: Wizard[] = [];
  family: Family[] = [];
  facemember: String = ""


  // TRAER COLOR Y NOMBRE FAMILIA IN ENTITY WIZARD
  ngOnInit(): void {
    let name = this.activeRoute.snapshot.params['name'];
    this.service.findByName(name).subscribe((wizards) => {
      this.wizardList.push(wizards);
      this.service.findFamilyByName(this.wizardList[0].familyname).subscribe(
        response => {
          this.family.push(response)
          console.log(this.family[0].members)
          this.family[0].members.forEach(member => {
            if (member.name != this.wizardList[0].name) {
              this.membersFamily.push(member)
            }
          });
        })
    });

    //Route validation to avoid repeat the same url in array routes
    let currentRoute: string = this.router.url
    let toSimbol = currentRoute.indexOf("%")
    let validateUrl = currentRoute.substring(0, toSimbol)
 
    if (this.service.urlArray[this.service.urlArray.length - 1] != this.router.url && !this.service.urlArray[this.service.urlArray.length - 1].startsWith(validateUrl)) {
      this.service.urlArray.push(this.router.url);
    } 
  }

  //Prueba ir al compo house
  goHouse() {
    // this.router.navigate([this.wizardList[0].houseurl]);
    this.router.navigate(['/house']);
  }
}
