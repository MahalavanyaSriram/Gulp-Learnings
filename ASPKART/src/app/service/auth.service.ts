import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from '../auth0-variables';
import { Router, NavigationStart } from '@angular/router'
@Injectable()
export class AuthService {
 
  lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, {
    theme: {
      logo: '../../assets/images/asp_logo.png',
    
    },
    languageDictionary: {
      emailInputPlaceholder: "something@youremail.com",
      title: ""
    }
  }, {
    oidcConformant: true,
    autoclose: true,
    auth: {
      redirectUrl: AUTH_CONFIG.callbackURL,
      responseType: 'token id_token',

    audience: 'https://mahalavanya.auth0.com/userinfo',
   
    params: {
      scope: 'openid'
    }
  }
  });
  

  constructor(public router: Router) {}

  public login(): void {
    this.lock.show();
    
  }
  public handleAuthentication(): void {
    this.lock.on('authenticated', (authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/products']);
      }
    });
    this.lock.on('authorization_error', (err) => {
      this.router.navigate(['/home']);
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
    });
  }
  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/home']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }



}