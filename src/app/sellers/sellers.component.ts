import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})

export class SellersComponent {

  product = {
    title: '',
    brand: '',
    category: '',
    price: '',
    stock: '',
    discountPercentage: '',
    rating: '',
    description: '',
    image: ''
  };
  constructor(private userData: ServicesService) {
  }
  postDetailsOfProduct(data: any) {
    this.userData.postProductDetails(this.product).
      subscribe((response) => {
        console.log(response);
        if (response !== null) {
          alert("Product added successfully");
          data.reset();
        } else {
          alert("Error occurred while adding product");
        }
      })
  }
}
