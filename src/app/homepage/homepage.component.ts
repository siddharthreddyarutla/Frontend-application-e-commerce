import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  users : any;
  // products: any[]=[];
  constructor(private userData : ServicesService)
  {
   
    userData.getData().subscribe((data: any) => {
       console.log("data", data);
      //  this.products.push(data);
       localStorage.setItem('products', JSON.stringify(data.products));
       this.users = data;
    });
  
  }

}
