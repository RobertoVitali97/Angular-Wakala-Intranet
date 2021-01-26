import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from 'src/app/utils/config';
import { Router } from '@angular/router';
import { User } from '../models/User';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) { }

  // #region Calls
  token(body: { username: string, password: string }) {
    return this.http.post<any>(Urls.auth.token, body, { withCredentials: true });
  }
  login() {
    return this.http.get<any>(Urls.auth.login, { withCredentials: true });
  }
  refreshToken() {
    const token = this.getLocalUser()?.RefreshToken;
    return this.http.post<any>(Urls.auth.refreshToken, { RefreshToken: token }, { withCredentials: true });
  }
  // #endregion

  // #region Local
  getLocalUser(): User {
    return JSON.parse(localStorage.getItem('CurrentUser'));
  }
  setLocalUser(user: User) {
    localStorage.setItem('CurrentUser', JSON.stringify(user));
  }
  // #endregion

  // #region Logout e isLoggedIn
  logout() {
    localStorage.removeItem('CurrentUser');
    this.router.navigateByUrl('Login');
  }
  isLoggedIn() {
    if (localStorage.getItem('CurrentUser')) { return true; } else { return false; }
  }
  // #endregion
}
