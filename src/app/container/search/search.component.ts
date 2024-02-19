import { Component, EventEmitter, Output } from '@angular/core';

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

  updatesearchText(inputElemnent :HTMLInputElement) {
      console.log(inputElemnent.value)
  }
}
