import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule
];

@NgModule({
  exports: material,
  imports: material
})
export class MaterialModule { }
