import { Component } from '@angular/core';
import { ObjectsService } from './service/objects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Objects } from './class/objects';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent {

  constructor(private service: ObjectsService, private router: Router, private activedRoute: ActivatedRoute) { }

  objectsList: Objects[] = new Array();
  currentRoute: string = '';
  isHome: boolean = false
  paginator: any
  currentScreen: string;
  comeBack: string = 'objects'


  ngOnInit(): void {

    let route = this.router.url

    switch (route) {
      
        case '/horocruxes':        
            this.service.findHorocruxes().subscribe(json => {
            this.objectsList = json
            })
          
        document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/horocruxes.jpg)"
        break;

        case '/wanders':        
            this.service.findWanders().subscribe(json => {
            this.objectsList = json
            })
          
        document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/wanders.jpg)"
        break;

        case '/reliques':        
            this.service.findReliques().subscribe(json => {
            this.objectsList = json
            })
          
        document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/reliques.jpg)"
        break;

        case '/quiddich':        
            this.service.findQuiddichObjects().subscribe(json => {
            this.objectsList = json
            })
          
        document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/quiddich.jpg)"
        break;

        case '/others-objects/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1):
          this.activedRoute.paramMap.subscribe(
            params => {
              let page: number = +params.get('page')
              //If page dont exist, go to page 0
              !page ? 0 : page;
              this.service
                .findOthersObjects(page)
                .subscribe((response) => {
                  this.objectsList = response.content
                  this.paginator = response
                });
            })
    document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/magic-objects.jpg)"
    this.currentScreen = 'other-magic-objects'
    break;
    // case '/objects':          
      //       this.service
      //         .findAll()
      //         .subscribe((response) => {
      //           console.log(response)
      //           /**
      //            * Taking from the json data all the objects 
      //            */
      //           response[0].deathReliquesList.forEach(element => {
      //             //Avoiding repeat wander
      //             element.name != 'Varita de Sauco' ? this.objectsList.push(element) : null
      //           });
      //           response[0].horocruxesList.forEach(element => {
      //             this.objectsList.push(element)
      //           });
      //           response[0].wandersList.forEach(element => {                  
      //             this.objectsList.push(element)
      //           });
      //           response[0].quiddichList.forEach(element => {                  
      //             this.objectsList.push(element)
      //           });
      //           response[0].othersObjectsList.forEach(element => {                  
      //             this.objectsList.push(element)
      //           });
      //         });
              
      //   document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/creatures-wallpaper.jpg)"
      //   break;
     
      default:
        break;
    }
  }

  //It goes to description screen
  seeDescription(url: string) {
    this.router.navigate(['/desc/' + url]);
  }

}
