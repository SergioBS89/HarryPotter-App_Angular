import { Component} from '@angular/core';
import { WizardService } from './service/wizard-service';
import { Wizard } from './class/wizard';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/whole-project/general.service';
import { GeneralEnum } from 'src/app/whole-project/general.enum';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent {
  constructor(private service: WizardService, private router: Router, private activedRoute: ActivatedRoute,
     private generalService : GeneralService) { }

  wizardList: Wizard[] = [];
  isHome: boolean = false
  paginator: any  
  currentScreen: string;//Paginator variable
  comeBack: GeneralEnum = GeneralEnum.COMEBACK_WIZARDS
  searcher: string = ""
  paginatorActive = true

  /**
   * Wizards categories
   */
  allWizardsCategory = GeneralEnum.WIZARDS
  teachersCategory = GeneralEnum.TEACHERS
  studentsCategory = GeneralEnum.STUDENTS
  mortifagosCategory = GeneralEnum.MORTIFAGOS
  otherWizardsCategory = GeneralEnum.OTHERS_WIZ
  animalsFantasticsCategory = GeneralEnum.ANIMALS_FANTASTICS

  ngOnInit(): void {

    let route = this.router.url
    switch (route) {
      case this.getCompleteRoute(this.allWizardsCategory):
        this.activedRoute.paramMap.subscribe(
          params => {
            let redirectTo = '/wizards/0'
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
            this.service
              .findAll(page, this.allWizardsCategory)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.wizardList, redirectTo, this.router)
              });
          })
        this.currentScreen = this.allWizardsCategory.toString()
        this.generalService.setBackground('wizard-list-background.jpg')
        break;

      case this.getCompleteRoute(this.mortifagosCategory):
        this.activedRoute.paramMap.subscribe(
          params => {
            let redirectTo = '/mortifagos/0'
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
            this.service
              .findAll(page, this.mortifagosCategory)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.wizardList, redirectTo, this.router)
              });
          })
        this.currentScreen = this.mortifagosCategory.toString()
        this.generalService.setBackground('mortifagos-background.jpg')
        break;

      case this.getCompleteRoute(this.animalsFantasticsCategory):
        this.activedRoute.paramMap.subscribe(
          params => {
            let redirectTo = '/ani-fantastics/0'
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
            this.service
              .findAll(page, this.animalsFantasticsCategory)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.wizardList, redirectTo, this.router)
              });
          })
        this.currentScreen = this.animalsFantasticsCategory.toString()
        this.generalService.setBackground('animals-fan-background.jpg')
        break;

      case this.getCompleteRoute(this.studentsCategory):
        this.activedRoute.paramMap.subscribe(
          params => {
            let redirectTo = '/ani-fantastics/0'
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
            this.service
              .findAll(page, this.studentsCategory)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.wizardList, redirectTo, this.router)
                //If the array dont contains any element, return to page 0
              });
          })
        this.currentScreen = this.studentsCategory.toString()
        this.generalService.setBackground('students-background.jpg')
        break;

      case this.getCompleteRoute(this.teachersCategory):
        this.activedRoute.paramMap.subscribe(
          params => {
            let redirectTo = '/teachers/0'
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
            this.service
              .findAll(page, this.teachersCategory)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.wizardList, redirectTo, this.router)
              });
          })
        this.currentScreen = this.teachersCategory.toString()
        this.generalService.setBackground('teachers-background.jpg')
        break;

      case this.getCompleteRoute(this.otherWizardsCategory):
        this.activedRoute.paramMap.subscribe(
          params => {
            let redirectTo = '/others/0'
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
            this.service
              .findAll(page, this.otherWizardsCategory)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.wizardList, redirectTo, this.router)
              });
          })
        this.currentScreen = this.otherWizardsCategory.toString()
        this.generalService.setBackground('others-background.png')
        break;
        
      default:
        break;
    }
  }

  /**
   * This function is used to find a specific wizard in DB 
   * @param url 
   */
  searchWizard(name) {
    this.service.findAllCoincidences(name).subscribe(json => {
      if (json[0] == undefined) {
        alert("No hay coincidencias")
      } else {
        this.wizardList = json
        this.paginatorActive = false
      }
    }
    )
  }

  /**
   * This function navigates to description component
   * @param url 
   */
  seeDescription(url: string) {
    this.generalService.urlArray.push(this.router.url)
    this.router.navigate(['/desc/' + url]);
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


