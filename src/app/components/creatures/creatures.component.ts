import { Component } from '@angular/core';
import { Creature } from './class/creature';
import { ActivatedRoute, Router } from '@angular/router';
import { CreaturesService } from './service/creatures.service';
import { GeneralEnum } from 'src/app/whole-project/general.enum';
import { GeneralService } from 'src/app/whole-project/general.service';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css']
})
export class CreaturesComponent {

  constructor(private router: Router, private activedRoute: ActivatedRoute, private service: CreaturesService, private generalService : GeneralService) { }

  creaturesList: Creature[] = [];
  isHome: boolean = false
  paginator: any
  currentScreen: string;
  comeBack: GeneralEnum = GeneralEnum.COMEBACK_CREATURES
  paginatorActive = true

  /**
   * Categories
   */
  allCreatures = GeneralEnum.ALL_CREATURES


  ngOnInit() {
    let route = this.router.url
    switch (route) {
      case this.getCompleteRoute(this.allCreatures):
        let redirectTo = '/creatures/0'
        this.activedRoute.paramMap.subscribe(
          params => {
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
            this.service
              .findCreatures(page, GeneralEnum.ALL_CREATURES)
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
    }

  }
   /**
   * Get the whole route for switch cases
   * @param category wizard category
   * @returns 
   */
   getCompleteRoute(category : GeneralEnum) : string{
    return '/' + category + '/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1)
  }  
}
