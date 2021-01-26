import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayslipsComponent } from './payslips.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PayslipsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: PayslipsComponent }
    ])
  ]
})
export class PayslipsModule { }
