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
  paginatorActive = true
  pathPaginator: string
  categoryDescription = Routes.CREATURES_CATEGORIES
  category = Routes.CREATURES
  shortcodeToDifferentCategory = Routes.GO_BACK_FROM_SCREEN_CREATURES


  ngOnInit() {
    let route = this.router.url;
    let redirectTo = '';
    let pathPrefix;

    switch (route) {

      case this.getCompleteRoute(Routes.NO_DANGER_CREATURES):
        redirectTo = '/' + Routes.NO_DANGER_CREATURES + '/'
        pathPrefix = Routes.NO_DANGER_CREATURES
        break;

      case this.getCompleteRoute(Routes.DANGER_CREATURES):
        redirectTo = '/' + Routes.DANGER_CREATURES + '/'
        pathPrefix = Routes.DANGER_CREATURES
        break;
      default:
        break;
    }

    this.pathPaginator = '/' + pathPrefix + '/';

    this.activedRoute.paramMap.subscribe(
      params => {
        let page: number = +params.get('page')
        this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router)
        this.service
          .findCreatures(page, pathPrefix)
          .subscribe((response) => {
            this.creaturesList = response.content as Creature[];
            this.paginator = response
            this.generalService.validateIfPageReturnEmptyArray(this.creaturesList, redirectTo, this.router)
          });
      })

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

}
