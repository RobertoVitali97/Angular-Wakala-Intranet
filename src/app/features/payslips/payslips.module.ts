import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayslipsComponent } from './payslips.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PayslipsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PayslipsComponent }
    ])
  ]
})
export class PayslipsModule { }
