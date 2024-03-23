import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){

  }
  redirectToRegister(){
    this.router.navigate([`register/`])
  }

  redirectTohOME(){
    this.router.navigate([`/`])

  }

  loginform(loginForm:any){
      console.log(loginForm)
   }

}
