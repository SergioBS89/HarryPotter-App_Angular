import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from './class/house';
import { HouseService } from './service/house-service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {
  constructor(
    private service: HouseService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}


  houseList: House[] = [];
 

  ngOnInit(): void {
    this.service.findAll().subscribe((house) => {
      (this.houseList = house)
      console.log(house)
    })
  }

  //It goes to description screen
  seeDescription(url: string) {
    this.router.navigate(['/desc/' + url]);
  }
}
