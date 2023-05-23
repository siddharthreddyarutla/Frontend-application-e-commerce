import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: any = {
    email: '',
    password: ''
  }
  user_response: any;
  constructor(private router: Router, private userService: ServicesService) {
  }
  onSubmit(form) {
    this.userService.userLogin(this.user).
      subscribe((response: any) => {
        console.log(response);
        if (response !== null) {
          this.user_response = response;
          localStorage.setItem("userCredentials", JSON.stringify(response));
          this.router.navigate(['/home']);
        } else {
          alert('User doesnt exists');
          form.reset();
        }
      });
  }
}

