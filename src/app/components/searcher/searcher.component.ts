import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {

  @Output()
  sendNameSearcher = new EventEmitter<string>()
 
  searcher:string

  searchingWizard(){
    this.sendNameSearcher.emit(this.searcher)
  }

}
