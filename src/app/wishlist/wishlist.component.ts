import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  products: any;
  user_credentials: any;
  pre_order_details: any;

  constructor(private router: Router, private serviceData: ServicesService) {

  }

  ngOnInit(): void {
    this.getAllProductsAddedToCart();
    this.getPreOrderProductDetails();
  }

  getPreOrderProductDetails() {
    this.serviceData.getPreOrderDetailsForCart(this.user_credentials.userId)
      .subscribe((response) => {
        console.log(response);
        if (response !== null) {
          this.pre_order_details = response;
        }
      })
  }

  getAllProductsAddedToCart() {
    this.user_credentials = JSON.parse(localStorage.getItem('userCredentials'));
    this.serviceData.getAllProductsAddedToCart(this.user_credentials.userId)
      .subscribe((response) => {
        console.log(response);
        this.products = response;
      })
  }

  removeItemFromCart(product: any) {
    this.serviceData.removeItemFromCart(this.user_credentials.userId, product.productId)
      .subscribe((response) => {
        console.log(response);
        alert('item has been deleted from the cart');
      })
  }
}

