import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../whole-project/general.service';
import { Routes } from 'src/app/whole-project/general.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent {

  @Input() item: any; // We receive the item value as input (from iteration)
  @Input() categoryDescription //we check which category is used
  @Input() category

  constructor(private router: Router, private generalService: GeneralService) { }


  /**
   * This function navigates to description component
   * @param url 
   */
  seeDescription(url: string) {
    this.generalService.urlArray.push(this.router.url)
    switch (this.categoryDescription) {
      case Routes.CREATURES_CATEGORIES:
        this.router.navigate(['/desc-crea/' + url]);
        break;
      case Routes.WIZARDS_CATEGORIES:
        this.router.navigate(['/desc/' + url]);
        break;
      case Routes.MORTIFAGOS_CATEGORIES:
          this.router.navigate(['/desc/' + url]);
          break;
      case Routes.OBJECTS_CATEGORIES:
        this.router.navigate(['/desc-oth/' + url]);
        break;
    }
  }

}
