import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent {



  users = {
    title:'',
    brand: '',
    category: '',
    price: '',
    stock: '',
    discountPercentage: '',
    rating: '',
    description: '',
  
  };

  products : any;
  

  constructor(private userData : ServicesService)
  {
    this.products = JSON.parse(localStorage.getItem("products"));
  }
  
  

  getSellersFromData(data: any){
    console.log(data);
    this.products.push(data);
    localStorage.setItem('products', JSON.stringify(this.products));
    alert('Data saved successfully');
    window.location.reload();
    // this.userData.saveData(this.users).subscribe((result)=>{
    //   console.log(result);
    // }
    //)
  }
}
