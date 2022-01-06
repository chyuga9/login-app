import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  successMessage = '';
  invalidLogin = false;
  loginSuccess = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin(){
this.authService.login(this.username, this.password).subscribe((result:any) => {
  this.invalidLogin = false;
  this.loginSuccess = true;
  this.successMessage = 'Login Successful';
  // redirect to main page
}, () => {
  this.invalidLogin = true;
  this.loginSuccess = false;
});
  }

}
