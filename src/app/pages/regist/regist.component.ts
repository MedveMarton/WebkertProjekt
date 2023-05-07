import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent {

  registForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    userName: new FormControl('')
  });

  constructor(private location: Location, protected auth: AuthService, protected router: Router){

  }

  onSubmit(){
    // TODO: Form validáció
    let form = this.registForm.value
    if (form.email && form.password && form.userName) {
      this.auth.register(form.email, form.password, form.userName).then(
        () => this.router.navigate(["main"])
      );
    }
  }

  goBack(){
    this.location.back();
  }

}
