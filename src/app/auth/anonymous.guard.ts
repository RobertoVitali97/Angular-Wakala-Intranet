import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({ providedIn: 'root' })
export class AnonymousGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) { }
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('Home');
      return false;
    }
    return true;
  }
}
