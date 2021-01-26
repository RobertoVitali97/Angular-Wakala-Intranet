import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeenDocumentsComponent } from './seen-documents.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SeenDocumentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: SeenDocumentsComponent }
    ])
  ]
})
export class SeenDocumentsModule { }
