import { Component } from '@angular/core';
@Component({
  selector: 'wakala-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  formTemplate = [
    {
      control: 'input',
      type: 'text',
      name: 'surname',
      class: 'col-12 col-md-9',
      label: 'Cognome'
    }
  ];
  tableSettings = {
    columns: [
      { key: 'surname',             header: 'Cognome' },
      { key: 'name',                header: 'Nome' },
      { key: 'cellular',            header: 'Cellulare',    className: 'd-none d-md-table-cell' },
      { key: 'email',               header: 'E-Mail',       className: 'd-none d-md-table-cell' },
      { key: 'action-sendEmail',    header: '',             className: 'd-none d-md-table-cell text-center' },
      { key: 'action-expand',       header: '',             className: 'd-table-cell d-md-none text-center action-expand' }
    ],
    expandedElementTemplate: [
      { key: 'cellular',            label: 'Cellulare',     type: 'string' },
      { key: 'email',               label: 'E-Mail',        type: 'string' },
      { key: 'action-sendEmail',    type: 'action'},
    ]
  };

  tableSource = [
    { id: '0', surname: 'Vitali', name: 'Roberto', cellular: '1234567890', email: 'r.vitali@wakala.it' },
    { id: '1', surname: 'Rossi', name: 'Paolo', cellular: '1234567891', email: 'p.rossi@wakala.it' },
    { id: '2', surname: 'Bianchi', name: 'Mario', cellular: '1234567892', email: 'm.bianchi@wakala.it' },
    { id: '3', surname: 'cognome lungo lungo', name: 'nome lungo lungo', cellular: 'cellulare lungo lungo', email: 'm.biapoakspoaksdnchi@wakala.it' },
    { id: '4', surname: 'cognome lungo lungo', name: 'nome lungo lungo', cellular: 'cellulare lungo lungo', email: 'm.biapoakspoaksdnchi@wakala.it' },
    { id: '5', surname: 'cognome lungo lungo', name: 'nome lungo lungo', cellular: 'cellulare lungo lungo', email: 'm.biapoakspoaksdnchi@wakala.it' },
    { id: '6', surname: 'cognome lungo lungo', name: 'nome lungo lungo', cellular: 'cellulare lungo lungo', email: 'm.biapoakspoaksdnchi@wakala.it' },
    { id: '7', surname: 'cognome lungo lungo', name: 'nome lungo lungo', cellular: 'cellulare lungo lungo', email: 'm.biapoakspoaksdnchi@wakala.it' },
    { id: '8', surname: 'cognome lungo lungo', name: 'nome lungo lungo', cellular: 'cellulare lungo lungo', email: 'm.biapoakspoaksdnchi@wakala.it' },
    { id: '9', surname: 'cognome lungo lungo', name: 'nome lungo lungo', cellular: 'cellulare lungo lungo', email: 'm.biapoakspoaksdnchi@wakala.it' },
    { id: '10', surname: 'cognome lungo lungo', name: 'nome lungo lungo', cellular: 'cellulare lungo lungo', email: 'm.biapoakspoaksdnchi@wakala.it' },
    { id: '11', surname: 'cognome lungo lungo', name: 'nome lungo lungo', cellular: 'cellulare lungo lungo', email: 'm.biapoakspoaksdnchi@wakala.it' },
    { id: '12', surname: 'cognome lungo lungo', name: 'nome lungo lungo', cellular: 'cellulare lungo lungo', email: 'm.biapoakspoaksdnchi@wakala.it' },
  ];


}
