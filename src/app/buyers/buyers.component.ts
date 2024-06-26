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
  user_credentials: any;
  product_quantity: number = 1;
  cart_state: string = "IN CART";
  wishlist_state: string = "IN WISHLIST";

  constructor(private userData: ServicesService) {
    this.user_credentials = JSON.parse(localStorage.getItem('userCredentials'));

    userData.getProducts().subscribe((data) => {
      console.log("data", data);
      this.products = data;
    });
  }

  addItemToCart(product: any) {
    const add_to_cart = {
      userId: this.user_credentials.userId,
      productId: product.productId,
      quantity: this.product_quantity,
      cartState: this.cart_state
    }
    this.userData.addToCart(add_to_cart).subscribe((response) => {
      console.log(response);
      if (response != null) {
        alert('Product added successfully to cart');
      } else {
        alert('Error occurred while adding into cart');
      }
    });
  }

  addItemToWishList(product: any) {
    // const add_to_wishlist = {
    //   userId: this.user_credentials.userId,
    //   productId: product.productId,
    //   quantity: this.product_quantity,
    //   cartState: this.wishlist_state
    // }
    // this.userData.addToCartOrWishlist(add_to_wishlist).subscribe((response) => {
    //   console.log(response);
    //   if (response != null) {
    //     alert('Product added successfully to wishlist');
    //   } else {
    //     alert('Error occurred while adding into wishlist');
    //   }
    // });
  }

  BuyProduct(product: any) {

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
