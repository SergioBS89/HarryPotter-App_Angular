import { Component, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/whole-project/general.service';
import { Wizard } from '../class/wizard';
import { WizardService } from '../service/wizard-service';

@Component({
  selector: 'app-wizards-categories',
  templateUrl: './wizards-categories.component.html',
  styleUrls: ['./wizards-categories.component.css']
})
export class WizardsCategories {
  constructor(private service: WizardService, private router: Router, private generalService: GeneralService, private activedRoute: ActivatedRoute) { }

  wizardList: Wizard[] = [];
  currentRoute: string = '';
  isHome: boolean = false
  paginator: any
  currentScreen: string;
  comeBack: string = 'wizards'
 


  ngOnInit(): void {

    let route = this.router.url

    switch (route) {
      case '/mortifagos/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1):
        this.activedRoute.paramMap.subscribe(
          params => {
            let page: number = +params.get('page')
            !page ? 0 : page;
            this.service
              .findMortifagos(page)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
              });
          })
        this.currentScreen = 'mortifagos'
        document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/mortifagos-background.jpg)"
        break;
      case '/ani-fantastics/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1):
        this.activedRoute.paramMap.subscribe(
          params => {
            let page: number = +params.get('page')
            !page ? 0 : page;
            this.service
              .findAnimalsFantastics(page)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
              });
          })
        this.currentScreen = 'animals'
        document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/animals-fan-background.jpg)"
        break;
      case '/students/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1):
        this.activedRoute.paramMap.subscribe(
          params => {
            let page: number = +params.get('page')
            !page ? 0 : page;
            this.service
              .findStudents(page)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
              });
          })
        this.currentScreen = 'students'
        document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/students-background.jpg)"
        break;
      case '/teachers/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1):
        this.activedRoute.paramMap.subscribe(
          params => {
            let page: number = +params.get('page')
            !page ? 0 : page;
            this.service
              .findTeachers(page)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
              });
          })
        this.currentScreen = 'teachers'
        document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/teachers-background.jpg)"
        break;
      case '/others/' + this.router.url.slice(this.router.url.lastIndexOf('/') + 1):
        this.activedRoute.paramMap.subscribe(
          params => {
            let page: number = +params.get('page')
            !page ? 0 : page;
            this.service
              .findOthers(page)
              .subscribe((response) => {
                this.wizardList = response.content as Wizard[];
                this.paginator = response
              });
          })
        this.currentScreen = 'others'
        document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/others-background.png)"
        break;
      default:
        break;
    }

  }

  //It goes to description screen
  seeDescription(url: string) {
    this.router.navigate(['/desc/' + url]);
  }
}
