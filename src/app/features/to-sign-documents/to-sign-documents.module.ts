import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToSignDocumentsComponent } from './to-sign-documents.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ToSignDocumentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ToSignDocumentsComponent }
    ])
  ]
})
export class ToSignDocumentsModule { }
