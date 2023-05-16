import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  existingEntries:any;

  constructor(){
   
  this.existingEntries = JSON.parse(localStorage.getItem("products"));

  }
  
}
