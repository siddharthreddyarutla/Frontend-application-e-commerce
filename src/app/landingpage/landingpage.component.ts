import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

export class LandingpageComponent {

  products: any;
  constructor(private userService: ServicesService) {
    userService.getProducts().subscribe((response: any) => {
      console.log(response);
      if (response !== null) {
        this.products = response;
      }
    });
  }
}
