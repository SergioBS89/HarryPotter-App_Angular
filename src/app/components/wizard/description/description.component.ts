import { Component, Input, SimpleChanges } from '@angular/core';
import { WizardService } from '../service/wizard-service';
import { Wizard } from '../class/wizard';
import { ActivatedRoute, Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Routes } from 'src/app/whole-project/general.enum';

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
  familyName: String = "";
  age: number = 0
  isHome: boolean = false
  shortcodeToDifferentCategory = Routes.GO_BACK_FROM_SCREEN_WIZARDS

  ngOnInit(): void {
    let name = this.activeRoute.snapshot.params['name'];
    this.service.findByName(name).subscribe((wizards) => {
      this.wizardList.push(wizards);
      this.service.findFamilyByName(this.wizardList[0].familyname).subscribe(
        response => {
          let family: any = response
          family.forEach(member => {
            if (member.name != this.wizardList[0].name) {
              this.membersFamily.push(member)
              this.familyName = this.wizardList[0].familyname
            }
            let getAge = this.wizardList[0].age
            this.age = new Date().getFullYear() - getAge
          });
        })
    });
  }


  //Prueba para obetner hipervinculo desde texto
  goFromText(name: string) {
    this.router.navigate(['http://localhost:4200/desc/' + text])
  }

  /**
   *This function manage the info from family members in description screen
   */
  displayDescriptionFromFamily(memberName: string) {
    this.service.findByName(memberName).subscribe(wizards => {
      let oldWizard = this.wizardList.pop()
      this.wizardList.push(wizards);
      this.membersFamily.push(oldWizard)
      //It filters from an array of wizards who wizards are different to the current one display in description screen
      this.membersFamily = this.membersFamily.filter(wiz => wiz.name != wizards.name)

      window.scroll({
        top: 100,
        behavior: "smooth",
      });
    })
  }

  goToWanderScreen(wander : string){
    if(wander != null || wander.length > 0){
      this.router.navigate(['/desc-wan/' + wander])
    }
  }
}
