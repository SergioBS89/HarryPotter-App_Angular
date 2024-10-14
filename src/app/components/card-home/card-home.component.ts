import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent {

  @Input() category: string;
  @Input() image: string;
  @Input() title: string;

  constructor(private router : Router) { }

  
  /**
   * Function to navigate to differents routes
   * @param url 
   */
  goTo(url: string) {
    this.router.navigate(['/' + url]);
  }
}
