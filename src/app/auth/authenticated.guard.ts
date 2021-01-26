import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('Login');
      return false;
    }
    return true;
  }
}
