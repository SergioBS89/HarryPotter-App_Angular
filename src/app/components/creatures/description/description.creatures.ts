import { Component, Input } from '@angular/core';
import { CreaturesService } from '../service/creatures.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from 'src/app/whole-project/general.enum';
import { Creature } from '../class/creature';

@Component({
  selector: 'app-description-creatures',
  templateUrl: './description.creatures.html',
  styleUrls: ['./description.creatures.css']
})
export class DescriptionCreatures {

  constructor(
    private service: CreaturesService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  @Input()
  description: any
  creatureList: Creature[] = [];
  tagList: Creature[] = [];
  isHome: boolean = false
  shortcodeToDifferentCategory = Routes.GO_BACK_FROM_SCREEN_CREATURES
  isCreature:boolean = true

  ngOnInit(): void {
    let name = this.activeRoute.snapshot.params['name'];
    this.service.findByRaze(name).subscribe((creature) => {
      console.log(creature)
      this.creatureList.push(creature);
      if(creature.tags != undefined){
        creature.tags.forEach(tag => this.tagList.push(tag));
      }
    })
  }

  //Prueba para obetner hipervinculo desde texto
  goFromText(text: string) {
    this.router.navigate(['http://localhost:4200/desc/' + text])
  }

  /**
   * Function to display tags in screen description
   */
  displayTagDescription() {
      let element = this.creatureList.pop()
      element.raze != undefined? this.isCreature = false : this.isCreature = true
      this.tagList.forEach(tag => {
        this.creatureList.push(tag)
      });
      this.tagList.pop()
      this.tagList.push(element)
      window.scroll({
        top: 100,
        behavior: "smooth",
    })
  }
}





