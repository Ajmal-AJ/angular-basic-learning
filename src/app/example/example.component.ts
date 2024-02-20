import { Component, ElementRef, QueryList, ViewChildren, } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {


  fulldata = '';
  @ViewChildren('inputEl') inputElements : QueryList<ElementRef>



  showData() {
    let name = ''
    this.inputElements.forEach(el => {
      name += el.nativeElement.value + '';
    })
    this.fulldata =name.trim()
  }
}
