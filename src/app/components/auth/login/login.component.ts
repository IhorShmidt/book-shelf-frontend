import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  ok: boolean;

  constructor(private authService: AuthService) {
  }

  checkValidation(invalidEmail: boolean, invalidPassword: boolean) {
    if (invalidEmail || invalidPassword) {
      this.ok = false;
    } else {
      this.logIn(this.user.email, this.user.password);
    }
  }

  logIn(email: string, password: string) {
    console.log('meow');
    // this.authService.logIn(email, password).subscribe(
    //   () => this.ok = true,
    //   () => this.ok = false);
  }

}
