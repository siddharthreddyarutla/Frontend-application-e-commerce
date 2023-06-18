import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-save-for-later',
  templateUrl: './save-for-later.component.html',
  styleUrls: ['./save-for-later.component.css']
})
export class SaveForLaterComponent {
  user_credentials: any;
  products: any;

  constructor(private servicData: ServicesService) {
    this.user_credentials = JSON.parse(localStorage.getItem('userCredentials'));

    this.servicData.getAllProductsAddedToSavForLater(this.user_credentials.userId).
      subscribe((response: any) => {
        if (response != null) {
          this.products = response;
        }
      })
  }

  removeItemFromSaveForLater(product: any) {
    this.servicData.removeItemFromSaveForLater(this.user_credentials.userId, product.productId).
      subscribe((response) => {
        console.log(response);
        alert('product removed successfully');
        window.location.reload();
      })
  }
}
