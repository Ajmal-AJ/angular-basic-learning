import { Component } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
[x: string]: any;

  //interpolation 
  name :string ="Iphone 13";
  price :number = 999;
  color : string = "red"

  // object calling
  product = {
    name :"Iphone 14",
    price :999,
    color :"red",
    discount : 8.5,
    instock : 5,
    image : "../assets/1.png"
  }

  getdiscount () {
    return this.product.price -  (this.product.price * this.product.discount / 100 )
  }


  onNameChange (event : any) {
    // this.name="test" // event change the value of input name is change  template --> cmpnt
    this.name = event.target.value

  }

  addtoCart = 0

  incerement () {
    if (this.addtoCart < this.product.instock) {
    this.addtoCart++
  }
  }
   

  decrement () {
    if (this.addtoCart > 0) {

      this.addtoCart-- ;
    }
  }
  

  // Two way binding example

  searchText =''

  
  // updateSearchText(event:any) {
  //   console.log(this.searchText = event.target.value)
  // }


  // ngFor example 

  listofdata :string[]=["mark","jhone","manu"]




  selectedproduct : Product;

  complexlist =[
    {
      "name" : "phone 1",
      "model" : "model-1",
      "price" : 8582,
      "colors" : ['red',"black","blue"],
      "image" : "",
      "isAvailable" :true,
    },
    {
      "name" : "phone 2",
      "model" : "model-2",
      "price" : 85822,
      "colors" : ['green',"black","blue"],
      "image" : "",
      "isAvailable" :false,
    },
  ]

  totalitem = this.complexlist.length;
  availableItem = this.complexlist.filter(count =>count.isAvailable===true).length;
  notavailableItem = this.complexlist.filter(count =>count.isAvailable===false).length;



  selectedRadiobuttonvalue :string = 'all'
  onFilterChanged(value :string) {
    this.selectedRadiobuttonvalue = value
    console.log("filter changed parent:",this.selectedRadiobuttonvalue)
  }
 }
