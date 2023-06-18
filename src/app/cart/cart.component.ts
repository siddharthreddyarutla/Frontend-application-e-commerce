import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any;
  user_credentials: any;
  pre_order_details: any;
  cart_state: String = "IN_CART";
  save_for_later: string = "SAVE FOR LATER";

  constructor(private router: Router, private serviceData: ServicesService, private changeDetectorRef: ChangeDetectorRef) {

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
      .subscribe((response: any) => {
        debugger;
        console.log(response);
        this.pre_order_details = response.preOrderDetailsDto;
        this.products = response.cartCompleteDto;
        alert('item has been deleted from the cart');
        this.changeDetectorRef.markForCheck();
        // here reload should not be done the assigned values are not redering in html so as of 
        // now just added reload but ideally it's not correct need to change the behaviour
        window.location.reload();
      })
  }

  updateQuantity(product: any) {
    this.serviceData.editProductQuantityInCart(this.user_credentials.userId, product.productId, product.quantity)
      .subscribe((response) => {
        if (response != null) {
          this.pre_order_details = response;
        }
      })
  }

  saveForLater(product: any) {
    const add_to_save_for_later = {
      userId: this.user_credentials.userId,
      productId: product.productId,
      quantity: product.quantity,
      cartState: this.save_for_later
    }
    this.serviceData.addToSaveForLater(add_to_save_for_later).subscribe((response) => {
      console.log(response);
      if (response != null) {
        alert('Product added successfully to Save For Later');
      } else {
        alert('Error occurred while adding into Save For Later');
      }
      window.location.reload();
    });
  }
}

