import { Component, Input, SimpleChanges } from '@angular/core';
import { WizardService } from '../service/wizard-service';
import { Wizard } from '../class/wizard';
import { ActivatedRoute, Router } from '@angular/router';
import { Family } from '../class/family';
import { text } from '@fortawesome/fontawesome-svg-core';

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

  @Input()
  description: any
  wizardList: Wizard[] = [];
  membersFamily: Wizard[] = [];
  age: number = 0
  isHome: boolean = false
  nameWizard: any;
  comeBack: string = 'wizards'

  ngOnInit(): void {
    let name = this.activeRoute.snapshot.params['name'];
    this.service.findByName(name).subscribe((wizards) => {
      this.wizardList.push(wizards);
      console.log(wizards)

      this.service.findFamilyByName(this.wizardList[0].familyname).subscribe(
        response => {
          let family: any = response
          family.forEach(member => {
            if (member.name != this.wizardList[0].name) {
              this.membersFamily.push(member)
            }
            let getEdad = this.wizardList[0].age
            this.age = new Date().getFullYear() - getEdad
          });
        })
    });
  }

  //Go to house of Hogwarts
  goHouse() {
    this.router.navigate(['/house']);
  }

  //Prueba para obetner hipervinculo desde texto
  goFromText(name: string) {
    this.router.navigate(['http://localhost:4200/desc/' + text])
  }

  goDescriptionFromFamily(name:string){
    this.service.findByName(name).subscribe(wizards => {
      this.wizardList.pop()
      this.wizardList.push(wizards);
      this.router.navigate(['/desc/' + name])
  })
  }
}
