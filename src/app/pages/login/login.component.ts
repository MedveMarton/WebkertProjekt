import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = new FormControl('');
  password = new FormControl('');

  constructor(protected auth: AuthService) { }

  async login(){
    if (this.email.value && this.password.value) {
      await this.auth.logIn(this.email.value, this.password.value)
      alert("Sikeres bejelentkezés")
    }
  }

  loading: boolean = false;


}
