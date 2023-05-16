import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent {

  users : any;

  my_cart : any[] = [];
  
  constructor(private userData : ServicesService)
  {
    userData.getData().subscribe((data) => {
       console.log("data", data);
       this.users = data;
    });
  }

  addItem(data : any){
      this.my_cart.push(data);
      localStorage.setItem('cart', JSON.stringify(this.my_cart));
      alert('Item added into cart successfully');
    
  }
}
