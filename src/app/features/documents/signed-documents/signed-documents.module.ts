import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignedDocumentsComponent } from './signed-documents.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SignedDocumentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: SignedDocumentsComponent }
    ])
  ]
})
export class SignedDocumentsModule { }
