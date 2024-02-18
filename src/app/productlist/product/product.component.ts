import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input()
  product : {
    "name" : string,
    "model" : string,
    "price" : number,
    "colors" : string[],
    "image" : string
    "isAvailable" :boolean
  }
}
