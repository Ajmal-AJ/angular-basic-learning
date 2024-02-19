import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText =''


  newSearchText = ''

  @Output()
  serchtextChanged :EventEmitter<string> = new EventEmitter<string>();
  
  @ViewChild('viewchildText') search_textEl:ElementRef
  
  
  
  updatesearchText(inputElemnent :HTMLInputElement) {
      console.log(inputElemnent.value)

      

  }

  updateNewSearchText() {
    this.newSearchText = this.search_textEl.nativeElement.value
    console.log(this.newSearchText)
  }


  




}
