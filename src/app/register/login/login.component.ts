import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  user,
} from '@angular/fire/auth';
import { RegisterService } from '../service/register.service';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private serviceRegister: RegisterService) {}

  ngOnInit(): void {}


  

  login() {
    
    console.log('mail', this.loginForm.value.email);
    console.log({ ...this.loginForm.value });
    this.serviceRegister
      .signIn( this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
       

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

}


