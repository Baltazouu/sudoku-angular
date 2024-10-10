import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { MatError, MatFormField } from "@angular/material/form-field";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

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
    MatInputModule,
    MatIconButton
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {

  isPasswordHided: boolean = true;

  constructor(private router: Router,
    private userService: UserService) {
  }

  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
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

    if (this.userService.login(this.loginForm.value.login, this.loginForm.value.password)) {
      return this.router.navigateByUrl('')
    }
    this.loginForm.setErrors({ invalid_credentials: true });
    return;
  }
}
