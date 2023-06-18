import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  products: any;
  user_credentials: any;

  constructor(private servicData: ServicesService) {
    this.user_credentials = JSON.parse(localStorage.getItem('userCredentials'));

    // this.servicData.getAllProductsAddedToWishlist(this.user_credentials.userId).
    //   subscribe((response: any) => {
    //     if (response != null) {
    //       this.products = response;
    //     }
    //   })
  }

  MoveProductToCart(product: any) {

  }

  RemoveItemFromWishlist(product: any) {

  }

}
