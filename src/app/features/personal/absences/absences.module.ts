import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsencesComponent } from './absences.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AbsencesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AbsencesComponent }
    ])
  ]
})
export class AbsencesModule { }
