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

  remarkName(selectorName: HTMLElement, activeRemarkName: boolean, category: string): boolean {
    if (!activeRemarkName) {
      selectorName.style.color = 'white'
      activeRemarkName = true
    } else {
      switch (category) {
        case 'objects':
          selectorName.style.color = 'rgb(0,0,0)'
          activeRemarkName = false
          break;
        case 'wizards':
          selectorName.style.color = ' rgb(165, 131, 21)'
          activeRemarkName = false
          break;
        case 'creatures':
          selectorName.style.color = 'rgb(66, 68, 64)'
          activeRemarkName = false
          break
        default:
          activeRemarkName = false
          break;
      }
    }
    return activeRemarkName
  }

  showAnimationClick(selectorName: HTMLElement) {
    selectorName.style.display = 'block'
    setTimeout(() => {
      selectorName.style.display = 'none'
    }, 3000)
  }
  
}
