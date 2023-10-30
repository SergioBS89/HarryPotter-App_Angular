import {Injectable } from '@angular/core';
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

  setBackground(imageUrl: string) {
    document.getElementById('background').style.backgroundImage = "url(../../../../assets/img/backgrounds/" + imageUrl + ")"
  }

  hoverUsingArrowCardOnClick(selectorFront: HTMLElement, selectorBack: HTMLElement) {
    selectorFront.style.transform = 'rotateY(-180deg)'
    selectorBack.style.transform = 'rotateY(0deg)'
    
  }

  hoverUsingBackCardOnClick(selectorFront: HTMLElement, selectorBack: HTMLElement) {
    selectorFront.style.transform = 'rotateY(0deg)'
    selectorBack.style.transform = 'rotateY(180deg)'
  }

  remarkName(selectorName : HTMLElement, activeRemarkName : boolean, creatures : boolean = false) : boolean{
    if(!activeRemarkName){
      selectorName.style.color = 'white'
      activeRemarkName = true
    }else{
      if(creatures){
        selectorName.style.color = 'rgb(0,0,0)'
      }else{
        selectorName.style.color = 'rgb(194, 194, 194)'
      }      
      activeRemarkName = false
    }
    return activeRemarkName
  }
}
