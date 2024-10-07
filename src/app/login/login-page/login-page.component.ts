import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

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
    MatError
  ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  loginForm: FormGroup=new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })


  onSubmit(){
    console.log("submit clicked")
  }

}
