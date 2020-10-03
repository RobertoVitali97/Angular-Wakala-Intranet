import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedDocumentsComponent } from './shared-documents.component';

@NgModule({
  declarations: [SharedDocumentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SharedDocumentsComponent }
    ])
  ]
})
export class SharedDocumentsModule { }
