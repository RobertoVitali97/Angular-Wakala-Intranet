import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { SidenavService } from './sidenav.service';
@Component({
  selector: 'wakala-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  constructor(public authService: AuthenticationService, public sidenavService: SidenavService) { }
  get fullYear() {
    return new Date().getFullYear();
  }
}
