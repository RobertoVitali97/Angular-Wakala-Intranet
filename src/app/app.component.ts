import { Component } from '@angular/core';
import { AuthenticationService } from './auth/authentication.service';
import { SidenavService } from './core/sidenav/sidenav.service';
@Component({
  selector: 'wakala-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sidenavService: SidenavService, private authService: AuthenticationService) {
    if (this.authService.isLoggedIn()) {
      this.sidenavService.loadMenu();
    }
  }
}
