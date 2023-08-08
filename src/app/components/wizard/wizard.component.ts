import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WizardService } from './service/wizard-service';
import { Wizard } from './class/wizard';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/whole-project/general.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent {
  constructor(private service: WizardService, private router: Router, private generalService: GeneralService, private activedRoute : ActivatedRoute) { }

  wizardList: Wizard[] = [];
  currentRoute: string = '';
  isHome: boolean = false
  paginator:any
  currentScreen:string = "wizards"
  comeBack: string = 'wizards'
  searcher:string = ""

  ngOnInit(): void {
    // this.service.findAll().subscribe((wizards) => (this.wizardList = wizards));

    // Pagination
    this.activedRoute.paramMap.subscribe(
      params => {
        let page: number = +params.get('page')
        !page ? 0 : page;
        this.service
          .findAll(page)
          .subscribe((response) =>{
            this.wizardList = response.content as Wizard[];
            this.paginator = response
           } );          
      })
  }

  searchWizard(name){    
    this.service.findAllCoincidences(name).subscribe(json => {
    json[0] != undefined ? this.wizardList = json : this.router.navigate(['/wizards/0'])
    if(json[0] == undefined){
      alert("No hay coincidencias")
    }
    }
  )}

  //It goes to description screen
  seeDescription(url: string) {
    this.router.navigate(['/desc/' + url]);
  }
}


