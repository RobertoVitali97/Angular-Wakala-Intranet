import { Component } from '@angular/core';
@Component({
  selector: 'wakala-shared-documents',
  templateUrl: './shared-documents.component.html',
  styleUrls: ['./shared-documents.component.css']
})
export class SharedDocumentsComponent {
  formTemplate = [
    {
      control: 'input',
      type: 'text',
      name: 'docCode',
      class: 'col-12 col-md-2',
      label: 'Codice',
      disabled: true,
    },
    {
      control: 'input',
      type: 'text',
      name: 'title',
      class: 'col-12 col-md-4',
      label: 'Titolo',
      disabled: false,
    },
    {
      control: 'input',
      type: 'text',
      name: 'employeeName',
      class: 'col-12 col-md-3',
      label: 'Dipendente',
      disabled: true,
      defaultValue: 'Roberto Vitali'
    },
  ];
}
