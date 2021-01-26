import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class SpinnerService {
  constructor(@Inject(DOCUMENT) private document: Document){}
  isVisible: boolean;
  show() {
    this.document.body.classList.add('loading');
    this.isVisible = true;
  }
  hide() {
    this.document.body.classList.remove('loading');
    this.isVisible = false;
  }
}
