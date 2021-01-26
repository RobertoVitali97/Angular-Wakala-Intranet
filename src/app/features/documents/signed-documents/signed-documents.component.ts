import { Component } from '@angular/core';
@Component({
  selector: 'wakala-signed-documents',
  templateUrl: './signed-documents.component.html',
  styleUrls: ['./signed-documents.component.css']
})
export class SignedDocumentsComponent {
  formTemplate = [
    {
      control: 'input',
      type: 'text',
      name: 'docCode',
      class: 'col-12 col-md-2',
      label: 'Codice',
      disabled: false,
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
