import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GeneralService } from 'src/app/whole-project/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) { }

  @Input()
  isHome: boolean = true;
  @Input()
  comeBack: string;


  ngOnInit() {
  }

  goTo(category: string) {
    this.router.navigate(['/' + category])
  }
}

