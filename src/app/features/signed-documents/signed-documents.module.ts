import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignedDocumentsComponent } from './signed-documents.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignedDocumentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SignedDocumentsComponent }
    ])
  ]
})
export class SignedDocumentsModule { }
