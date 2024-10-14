import { Component, ElementRef } from '@angular/core';
import { WizardService } from './service/wizard-service';
import { Wizard } from './class/wizard';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/whole-project/general.service';
import { Routes } from 'src/app/whole-project/general.enum';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent {
  constructor(private service: WizardService, private router: Router, private activedRoute: ActivatedRoute,
    private generalService: GeneralService) { }

  wizardList: Wizard[] = [];
  isHome: boolean = false
  paginator: any
  paginatorActive = true
  pathPaginator: string
  searcher: string = ""
  categoryDescription = Routes.WIZARDS_CATEGORIES
  category = Routes.WIZARDS
  shortcodeToDifferentCategory = Routes.GO_BACK_FROM_SCREEN_WIZARDS

  ngOnInit(): void {
    let route = this.router.url;
    let redirectTo = '';
    let pathPrefix;
    
    switch (route) {
      case this.getCompleteRoute(Routes.TEACHERS):
        redirectTo = '/teachers/0';
        pathPrefix = Routes.TEACHERS;
        break;
    
      case this.getCompleteRoute(Routes.STUDENTS):
        redirectTo = '/students/0';
        pathPrefix = Routes.STUDENTS;
        break;
    
      case this.getCompleteRoute(Routes.OTHERS_WIZ):
        redirectTo = '/others/0';
        pathPrefix = Routes.OTHERS_WIZ;
        break;
    
      case this.getCompleteRoute(Routes.ANIMALS_FANTASTICS):
        redirectTo = '/ani-fantastics/0';
        pathPrefix = Routes.ANIMALS_FANTASTICS;
        break;
    
      default:
        return; // Si no se encuentra ninguna ruta coincidente, salir de la función.
    }
    
    this.activedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');
      this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router);
      this.service.findAll(page, pathPrefix).subscribe(response => {
        this.wizardList = response.content as Wizard[];
        this.paginator = response;
        this.generalService.validateIfPageReturnEmptyArray(this.wizardList, redirectTo, this.router);
      });
    });
    
    this.pathPaginator = '/' + pathPrefix + '/';
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
  getCompleteRoute(category: Routes): string {
    return '/' + category + '/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1)
  }

   /**
   * This function is used to find a specific wizard or mortifago in DB 
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
}


