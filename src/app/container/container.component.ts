import { Component, ViewChild } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {


  @ViewChild(ProductlistComponent) productListComponent : ProductlistComponent;
}
