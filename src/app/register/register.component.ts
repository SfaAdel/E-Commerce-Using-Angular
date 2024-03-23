import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private router:Router) {
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          username: ['', [Validators.required,Validators.pattern('\\s*\\S+\\s*')]],
          password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
          confirmPassword: ['', [Validators.required]]
           }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
  
    // Check if controls exist and are not null
    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;
  
      return password === confirmPassword ? null : { notMatch: true };
    } else {
      // If controls do not exist or are null, return null (no error)
      return null;
    }
  }
  
  registerSubmit(){
    if (this.registerForm.invalid) {
      this.validateMyForm(this.registerForm);
    } else {
      this.redirectToHome();
    }
  }
  redirectToHome(){
      this.router.navigate(['/']);
   }
  
    validateMyForm(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach((field) => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateMyForm(control);
        }
      });
    }

    redirectToLogin(){
      this.router.navigate(['login']);

    }
}

