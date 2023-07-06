import { Component, Input, SimpleChanges } from '@angular/core';
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

  @Input() description : any
  wizardList: Wizard[] = [];
  membersFamily: Wizard[] = [];
  family: Family[] = [];
  facemember: String = ""
  age: number = 0


  // TRAER COLOR Y NOMBRE FAMILIA IN ENTITY WIZARD
  ngOnInit(): void {
    let name = this.activeRoute.snapshot.params['name'];
    this.service.findByName(name).subscribe((wizards) => {
      this.wizardList.push(wizards);

      this.service.findFamilyByName(this.wizardList[0].familyname).subscribe(
        response => {
          this.family.push(response)
          // console.log(this.family[0].members)
          this.family[0].members.forEach(member => {
            if (member.name != this.wizardList[0].name) {
              this.membersFamily.push(member)
            }
            let getEdad = this.wizardList[0].age
            
            this.age = new Date().getFullYear() - getEdad
            console.log(new Date().getFullYear() - getEdad)
          });
        })
    });
    
  }

  //Prueba ir al compo house
  goHouse() {
    // this.router.navigate([this.wizardList[0].houseurl]);
    this.router.navigate(['/house']);
  }
}
