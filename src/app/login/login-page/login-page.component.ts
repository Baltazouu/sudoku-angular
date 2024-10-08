import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { MatError, MatFormField } from "@angular/material/form-field";
import { MatButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatCardContent,
    MatFormField,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatButton,
    MatInput,
    ReactiveFormsModule,
    MatError,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {

  isPasswordHided: boolean = true;

  constructor(private router: Router) {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  hidePassword() {
    this.isPasswordHided = !this.isPasswordHided;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    localStorage.setItem('login', this.loginForm.get('login')?.value)
    return this.router.navigateByUrl('')
  }
}
