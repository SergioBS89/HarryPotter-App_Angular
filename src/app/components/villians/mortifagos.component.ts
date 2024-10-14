import { Component} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Wizard } from '../wizard/class/wizard';
import { WizardService } from '../wizard/service/wizard-service';
import { GeneralService } from '../../whole-project/general.service';
import { Routes } from '../../whole-project/general.enum';

@Component({
  selector: 'app-mortifagos',
  templateUrl: './mortifagos.component.html',
  styleUrls: ['./mortifagos.component.css']
})
export class MortifagosComponent {
  constructor(private service: WizardService, private router: Router, private activedRoute: ActivatedRoute,
    private generalService: GeneralService) { }

  wizardList: Wizard[] = [];
  isHome: boolean = false
  paginator: any
  shortcodeToDifferentCategory = Routes.GO_BACK_FROM_SCREEN_MORTIFAGOS
  searcher: string = ""
  paginatorActive = true //Hide paginator in searcher
  pathPaginator: string
  categoryDescription = Routes.MORTIFAGOS_CATEGORIES
  category = Routes.VILLIANS

  ngOnInit(): void {
    let route = this.router.url
    switch (route) {

      case this.getCompleteRoute(Routes.MORTIFAGOS):
        this.activedRoute.paramMap.subscribe(
          params => {
            let redirectTo = '/mortifagos/0'
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
            this.service
              .findAll(page, Routes.MORTIFAGOS)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.wizardList, redirectTo, this.router)
              });
          })
        this.pathPaginator = '/' + Routes.MORTIFAGOS + '/'        
        break;

      default:
        break;
    }
  }

  /**
   * TODO ADD THIS FUNCTION IN SERVICE
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
  getCompleteRoute(category: Routes): string {
    return '/' + category + '/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1)
  }
}

