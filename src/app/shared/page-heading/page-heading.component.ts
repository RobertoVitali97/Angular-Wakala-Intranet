import { Component, Input } from '@angular/core';
@Component({
  selector: 'wakala-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss']
})
export class PageHeadingComponent {
  @Input() Title: string;
  @Input() Description: string;
  constructor() { }
}
