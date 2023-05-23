import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent {

  products: any;
  my_cart: any[] = [];

  constructor(private userData: ServicesService) {
    userData.getProducts().subscribe((data) => {
      console.log("data", data);
      this.products = data;
    });
  }

  addItem(data: any) {
    this.my_cart.push(data);
    localStorage.setItem('cart', JSON.stringify(this.my_cart));
    alert('Item added into cart successfully');
  }

  sortRatingAsc() {
    this.userData.sortRatingByAsc().subscribe((response) => {
      console.log(response);
      if (response !== null) {
        this.products = response;
      }
    })
  }

  sortRatingDesc() {
    this.userData.sortRatingByDesc().subscribe((response) => {
      console.log(response);
      if (response != null) {
        this.products = response;
      }
    })
  }

  sortDiscountAsc() {
    this.userData.sortDiscountByAsc().subscribe((response) => {
      console.log(response);
      if (response !== null) {
        this.products = response
      }
    })
  }

  sortDiscountDesc() {
    this.userData.sortDiscountByDesc().subscribe((response) => {
      console.log(response);
      if (response !== null) {
        this.products = response
      }
    })
  }
}
