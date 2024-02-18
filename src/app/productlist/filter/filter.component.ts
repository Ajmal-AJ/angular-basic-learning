import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {


  //custom property binding
  @Input()
  all:number =0;


  @Input()
  available_item:number =0;


  @Input()
  notavailable_item:number =0;
}
