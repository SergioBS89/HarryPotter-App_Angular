import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  //This array save all the routes used in button back to the previous screen
  urlArray: string[] = []

  checkIfPageValueIsNaN(page: number, navigate: string, router: Router) {
    if (Number.isNaN(page)) {
      router.navigate([navigate])
    }
  }

  validateIfPageReturnEmptyArray(array: any, navigate: string, router: Router) {
    if (array.length == 0) {
      router.navigate([navigate])
    }
  }  
}
