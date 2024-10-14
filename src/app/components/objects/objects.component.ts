import { Component } from '@angular/core';
import { ObjectsService } from './service/objects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Objects } from './class/objects';
import { GeneralService } from 'src/app/whole-project/general.service';
import { Routes } from 'src/app/whole-project/general.enum';


@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent {

  constructor(private service: ObjectsService, private router: Router, private activedRoute: ActivatedRoute, private generalService: GeneralService) { }

  objectsList: Objects[] = new Array();
  isHome: boolean = false;
  paginator: any;
  paginatorActive = true
  shortcodeToDifferentCategory = Routes.GO_BACK_FROM_SCREEN_OBJECTS;
  pathPaginator: string
  categoryDescription = Routes.OBJECTS_CATEGORIES
  category = Routes.OBJECTS


  ngOnInit(): void {
    //This variable get the current url
    let route = this.router.url;
    let redirectTo = '';
    let pathPrefix;

    switch (route) {
      case this.getCompleteRoute(Routes.WANDERS):
        redirectTo = '/wanders/0';
        pathPrefix = Routes.WANDERS;
        break;

      case this.getCompleteRoute(Routes.RELIQUES):
        redirectTo = '/hollows/0';
        pathPrefix = Routes.RELIQUES;
        break;

      case this.getCompleteRoute(Routes.HOROCRUXES):
        redirectTo = '/horocruxes/0';
        pathPrefix = Routes.HOROCRUXES;
        break;

      case this.getCompleteRoute(Routes.QUIDDICH):
        redirectTo = '/quiddich/0';
        pathPrefix = Routes.QUIDDICH;
        break;

      case this.getCompleteRoute(Routes.OTHER_OBJECTS):
        redirectTo = '/others-objects/0';
        pathPrefix = Routes.OTHER_OBJECTS;
        break;

      default:
        return; 
    }

    this.pathPaginator = '/' + pathPrefix + '/';

      this.activedRoute.paramMap.subscribe(params => {
        let page: number = +params.get('page');
        this.generalService.checkIfPageValueIsNaN(page, redirectTo, this.router);
        this.service.findAll(page, pathPrefix).subscribe(response => {
          this.objectsList = response.content;
          this.paginator = response;
          this.generalService.validateIfPageReturnEmptyArray(this.objectsList, redirectTo, this.router);
        });
      });
    
    }
  

  /**
   * This function navigates to description component
   * @param url 
   * @param category 
   */
  seeDescription(url: string) {

    this.generalService.urlArray.push(this.router.url)
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
