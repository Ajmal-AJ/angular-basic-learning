import { Component, Input ,EventEmitter, Output} from '@angular/core';


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


  
  
  selectedFilterRadiobutton : string = 'all' // set default selection of radio button 
 
  @Output()
  selectedFilterRadioButtonChanged:EventEmitter<string> = new EventEmitter<string>();


  onRadiobuttonChange() {
    console.log("from child component",this.selectedFilterRadiobutton)
    // custom event 
    // here emit the value of radio button when user change the radio. emit() mehtod is used 
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadiobutton)
  }
}
