import { Component } from '@angular/core';
import { Creature } from './class/creature';
import { ActivatedRoute, Router } from '@angular/router';
import { CreaturesService } from './service/creatures.service';
import { Routes } from 'src/app/whole-project/general.enum';
import { GeneralService } from 'src/app/whole-project/general.service';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css']
})
export class CreaturesComponent {

  constructor(private router: Router, private activedRoute: ActivatedRoute, private service: CreaturesService, private generalService: GeneralService) { }

  creaturesList: Creature[] = [];
  isHome: boolean = false
  paginator: any
  currentScreen: string;
  comeBack = Routes.COMEBACK_CREATURES
  paginatorActive = true
  activeRemarkName = false

  /**
   * Categories
   */
  allCreatures = Routes.ALL_CREATURES
  noDangerCreatures = Routes.NO_DANGER_CREATURES
  dangerCreatures = Routes.DANGER_CREATURES


  ngOnInit() {
    let route = this.router.url
    let redirectTo : string;
    switch (route) {
      case this.getCompleteRoute(this.allCreatures):
        redirectTo = '/creatures/0'
        this.activedRoute.paramMap.subscribe(
          params => {
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
            this.service
              .findCreatures(page, this.allCreatures)
              .subscribe((response) => {
                this.creaturesList = response.content as Creature[];
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.creaturesList, redirectTo, this.router)

                //Asigning tags PROFF
                // let lechuza = response.content[2].tags[0] as CreaturesTags
                // console.log(lechuza)
              });
          })
        this.currentScreen = this.allCreatures.toString()
        this.generalService.setBackground('wizard-list-background.jpg')
        break;

      case this.getCompleteRoute(this.noDangerCreatures):
        redirectTo = '/no-danger/0'
        this.activedRoute.paramMap.subscribe(
          params => {
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
            this.service
              .findCreatures(page, this.noDangerCreatures)
              .subscribe((response) => {
                this.creaturesList = response.content as Creature[];
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.creaturesList, redirectTo, this.router)
              });
          })
        this.currentScreen = this.noDangerCreatures.toString()
        this.generalService.setBackground('wizard-list-background.jpg')
        break;

        case this.getCompleteRoute(this.dangerCreatures):
          redirectTo = '/danger/0'
          this.activedRoute.paramMap.subscribe(
            params => {
              let page: number = +params.get('page')
              this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
              this.service
                .findCreatures(page, this.dangerCreatures)
                .subscribe((response) => {
                  this.creaturesList = response.content as Creature[];
                  this.paginator = response
                  this.generalService.validateIfPageReturnEmptyArray(this.creaturesList, redirectTo, this.router)
                });
            })
          this.currentScreen = this.dangerCreatures.toString()
          this.generalService.setBackground('wizard-list-background.jpg')
          break;
      default:
        break;
    }

  }
  /**
  * Get the whole route for switch cases
  * @param category wizard category
  * @returns 
  */
  getCompleteRoute(category: Routes): string {
    return '/' + category + '/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1)
  }

  /**
   * This function navigates to description component
   * @param url 
   */
  seeDescription(url: string) {
    this.generalService.urlArray.push(this.router.url)
    this.router.navigate(['/desc-crea/' + url]);
  }


  hoverUsingArrowCardOnClick(selectorFront: HTMLElement, selectorBack: HTMLElement) {
    this.generalService.hoverUsingArrowCardOnClick(selectorFront,selectorBack)
   }
 
   hoverUsingBackCardOnClick(selectorFront: HTMLElement, selectorBack: HTMLElement) {
   this.generalService.hoverUsingBackCardOnClick(selectorFront,selectorBack)
   }
 
   remarkName(selectorName : HTMLElement, creatures : boolean){
    this.activeRemarkName = this.generalService.remarkName(selectorName, this.activeRemarkName, creatures)
   }

}
