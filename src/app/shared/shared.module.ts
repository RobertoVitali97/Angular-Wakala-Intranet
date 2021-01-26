import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SortingFormComponent } from './sorting-form/sorting-form.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { CustomDate } from './pipes/customDate.pipe';
import { FaConvertIcon } from './pipes/faConvertIcon.pipe';


@NgModule({
  declarations: [SortingFormComponent, PageHeadingComponent, TableComponent, CustomDate, FaConvertIcon],
  exports: [
    MaterialModule,
    SortingFormComponent,
    TableComponent,
    PageHeadingComponent,
    FormsModule,
    ReactiveFormsModule,
    CustomDate,
    FaConvertIcon
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
