import { Component } from '@angular/core';

@Component({
  selector: 'wakala-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  open = true;

  toggleOpen() {
    this.open = !this.open;
  }

  closeSideNav() {
    this.open = false;
  }
}