import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wakala-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuIconClick: EventEmitter<any> = new EventEmitter();

  menuIconHandler() {
    this.menuIconClick.emit(undefined);
  }
}
