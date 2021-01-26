import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    SidenavComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    SidenavComponent,
    SpinnerComponent
  ]
})
export class CoreModule { }
