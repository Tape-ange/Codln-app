import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {
  signUpForm= new FormGroup  ({
    username: new FormControl(''),
    email:new FormControl(''),
    password: new FormControl('')
  })

  constructor(private serviceRegister: RegisterService){}

  inscription(){
    this.serviceRegister.register(this.signUpForm.value.email, this.signUpForm.value.password, this.signUpForm.value.username ).then(() =>{
      console.log('inscrition', this.signUpForm.value.email, this.signUpForm.value.password, this.signUpForm.value.username);
      
    })
  }
}
