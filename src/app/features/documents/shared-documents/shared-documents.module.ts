import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedDocumentsComponent } from './shared-documents.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SharedDocumentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: SharedDocumentsComponent }
    ])
  ]
})
export class SharedDocumentsModule { }
