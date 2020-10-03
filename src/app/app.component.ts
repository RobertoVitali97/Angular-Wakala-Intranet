import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './core/sidenav/sidenav.component';

@Component({
  selector: 'wakala-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SidenavComponent, { static: false })
  sidenav: SidenavComponent;

  menuIconClickHandler() {
    this.sidenav.toggleOpen();
  }
}
