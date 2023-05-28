import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  products: any;
  user_credentials: any;

  constructor(private router: Router, serviceData: ServicesService) {
    this.user_credentials = JSON.parse(localStorage.getItem('userCredentials'));

    serviceData.getAllProductsAddedToCart(this.user_credentials.userId).subscribe((response) => {
      console.log(response);
      this.products = response;
    })
  }

}

