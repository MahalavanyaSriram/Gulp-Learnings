import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../authentication/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private router: Router
    //private authService: AuthService
  ) { }

  ngOnInit() {
    // var webAuth = new auth0.WebAuth({
    //   domain: 'mahalavanya.auth0.com',
    //   clientID: 'mm8c7mtKCowKLama0psvh4HMKxIdFrb6',
    //   responseType: 'token id_token',
    //   audience: 'https://mahalavanya.auth0.com/userinfo',
    //   scope: 'openid',
    //   redirectUri: window.location.href
    // });
  
  }
  // login(event) {

  //   event.preventDefault();
  // webAuth.authorize();
  //  }
  gotoSignup(): void {
    this.router.navigate(['/signup']);
  }
}
