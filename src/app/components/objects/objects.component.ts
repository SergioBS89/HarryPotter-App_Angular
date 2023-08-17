import { Component } from '@angular/core';
import { ObjectsService } from './service/objects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Objects } from './class/objects';
import { GeneralService } from 'src/app/whole-project/general.service';
import { GeneralEnum } from 'src/app/whole-project/general.enum';


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
  currentScreen: string;
  comeBack: GeneralEnum = GeneralEnum.COMEBACK_OBJECTS;

  /**
   * Categories
   */
  horocruxesCategory = GeneralEnum.HOROCRUXES
  reliquesCategory = GeneralEnum.RELIQUES
  quiddichCategory = GeneralEnum.QUIDDICH
  otherObjectsCategory = GeneralEnum.OTHER_OBJECTS
  wandersCategory = GeneralEnum.WANDERS

  /**
   * These variables are to display the differents 'backcards' in HTML
   */
  backcardHorocrux: boolean
  backcardWander: boolean
  backcardOthers: boolean
  backcardReliques: boolean
  backcardQuiddich: boolean


  ngOnInit(): void {

    //This variable get the current url
    let route = this.router.url

    switch (route) {
      case '/' + this.horocruxesCategory:
        this.service.findHorocruxes().subscribe(json => {
          this.objectsList = json
        })
        
        this.generalService.setBackground('horocruxes.jpg')
        this.backcardHorocrux = true
        break;

      case '/' + this.wandersCategory + '/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1):
        this.activedRoute.paramMap.subscribe(
          params => {
            let firstRoute = '/wanders/0'
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, firstRoute, this.router)
            this.service
              .findWanders(page)
              .subscribe((response) => {
                this.objectsList = response.content
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.objectsList,firstRoute, this.router )
              })
          });
        
        this.generalService.setBackground('wanders.jpg')
        this.currentScreen = this.wandersCategory.toString()
        this.backcardWander = true
        break;

      case '/' + this.reliquesCategory:
        this.service.findReliques().subscribe(json => {
          this.objectsList = json
        })
        
        this.generalService.setBackground('reliques.jpg')
        this.backcardReliques = true
        break;

      case '/' + this.quiddichCategory:
        this.service.findQuiddichObjects().subscribe(json => {
          this.objectsList = json
        })
        
        this.generalService.setBackground('quiddich.jpg')
        this.backcardQuiddich = true
        break;

      case '/' + this.otherObjectsCategory + '/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1):
        this.activedRoute.paramMap.subscribe(
          params => {
            let firstRoute = '/others-objects/0'
            let page: number = +params.get('page')
            this.generalService.checkIfPageValueIsNaN(page, firstRoute, this.router)
            this.service
              .findOthersObjects(page)
              .subscribe((response) => {
                this.objectsList = response.content
                this.paginator = response
                this.generalService.validateIfPageReturnEmptyArray(this.objectsList,firstRoute,this.router)
              });
          })
        
        this.generalService.setBackground('magic-objects.jpg')
        this.currentScreen = 'other-magic-objects'
        this.backcardOthers = true
        break;

      default:
        break;
    }
  }

  

  /**
   * This function navigates to description component
   * @param url 
   * @param category 
   */
  seeDescription(url: string, category: string) {

    this.generalService.urlArray.push(this.router.url)
    switch (category) {
      case this.wandersCategory:
        this.router.navigate([GeneralEnum.WANDER_DESC + url]);
        break;
      case this.horocruxesCategory:
        this.router.navigate([GeneralEnum.HOROCRUXES_DESC + url]);
        break;
      case this.reliquesCategory:
        this.router.navigate([GeneralEnum.RELIQUES_DESC + url]);
        break;
      case this.quiddichCategory:
        this.router.navigate([GeneralEnum.QUIDDICH_DESC + url]);
        break;
      case this.otherObjectsCategory:
        this.router.navigate([GeneralEnum.OTHER_OBJECTS_DESC + url]);
        break;
    }

  }

}
