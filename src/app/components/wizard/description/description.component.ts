import { Component } from '@angular/core';
import { WizardService } from '../service/wizard-service';
import { Wizard } from '../class/wizard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  constructor(
    private service: WizardService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  wizardList: Wizard[] = [];
  currentRoute: string = this.router.url.charAt[0];
  currentRoute2: string = this.router.url.charAt[1];
  currentRoute3: string = this.router.url.charAt[2];
  currentRoute4: string = this.router.url.charAt[3];
  currentRoute5: string = this.router.url.charAt[4];
  name = this.currentRoute + this.currentRoute2 + this.currentRoute3 + this.currentRoute4 + this.currentRoute5

  ngOnInit(): void {
    let name = this.activeRoute.snapshot.params['name'];
    this.service.findByName(name).subscribe((wizards) => {
      this.wizardList.push(wizards);
    });

    //Current route

    if(this.service.urlArray[this.service.urlArray.length -1].startsWith(`/desc/${name}`)){ 
    console.log("Last element" + this.service.urlArray[this.service.urlArray.length -1])
    console.log("Last element" + this.service.urlArray[0])
    console.log("Ruta activa" + this.router.url)
    }   else{
    this.service.urlArray.push(this.router.url)
      console.log("noooooooo")
    } 
    
    console.log(this.service.urlArray.length)  
    for (let i = 0; i < this.service.urlArray.length; i++) {
      console.log(this.service.urlArray)        
    }
    console.log("Last element" + this.service.urlArray[this.service.urlArray.length -1])
    console.log("Second last element" + this.service.urlArray[this.service.urlArray.length -2])
    console.log("3 element" + this.service.urlArray[this.service.urlArray.length -3])

  }

  //Prueba ir al compo house
  goHouse(){
    this.router.navigate(['house'])
  }
}
