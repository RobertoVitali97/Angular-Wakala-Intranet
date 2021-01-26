import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToSignDocumentsComponent } from './to-sign-documents.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ToSignDocumentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ToSignDocumentsComponent }
    ])
  ]
})
export class ToSignDocumentsModule { }
