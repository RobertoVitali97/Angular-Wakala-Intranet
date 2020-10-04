import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeenDocumentsComponent } from './seen-documents.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SeenDocumentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SeenDocumentsComponent }
    ])
  ]
})
export class SeenDocumentsModule { }
