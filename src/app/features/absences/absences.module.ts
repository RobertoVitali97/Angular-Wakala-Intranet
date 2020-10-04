import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsencesComponent } from './absences.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AbsencesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AbsencesComponent }
    ])
  ]
})
export class AbsencesModule { }
