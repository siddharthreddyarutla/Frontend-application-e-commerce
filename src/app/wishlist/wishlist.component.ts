import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  existingEntries: any;
  constructor(private router: Router) {
    this.existingEntries = JSON.parse(localStorage.getItem("cart"));
  }

  buyItem() {
    if (localStorage.getItem('cart') === null) {
      alert('No items in your wish list');
    }
    else {
      localStorage.removeItem('cart');
      this.router.navigate(['/landing']);
      alert('Order placed successfully');
    }
  }
}

