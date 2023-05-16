import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }
  userArray = [
    {email:'sidharthreddyarutla@gmail.com', password :'sid' , type:'buyer'},
    {email:'sidharthreddyarutla@gmail.com', password :'sid' , type:'seller'}
  ]; 

  singleUser = { email: '', password: '' ,type: ''}; 
  submitted = false; 
  founduser = false; 
  
  onSubmit(form) 
  {  
    this.userArray.forEach((user) => { 
      if (user.email == this.singleUser.email && 
        user.password == this.singleUser.password &&
        user.type == this.singleUser.type) { 
        this.founduser = true; 
      } }); 

      
      
      if (this.founduser) { 
       
        this.authService.login(); 
        this.router.navigate(['/Home']); 
      } 
      else { 
        alert('User email or password is wrong!'); 
        this.router.navigate(['']); 
      } 
      form.reset(); 
    }
}

