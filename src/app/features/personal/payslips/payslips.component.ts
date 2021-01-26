import { Component } from '@angular/core';
@Component({
  selector: 'wakala-payslips',
  templateUrl: './payslips.component.html',
  styleUrls: ['./payslips.component.css']
})
export class PayslipsComponent {
  formTemplate = [
    {
      control: 'input',
      type: 'text',
      name: 'employeeName',
      class: 'col-12 col-md-3',
      label: 'Dipendente',
      disabled: true,
      required: true,
      defaultValue: 'Roberto Vitali'
    },
    {
      control: 'select',
      name: 'year',
      class: 'col-12 col-md-3',
      label: 'Anno',
      disabled: false,
      required: true,
      options: [
        { id: 0, displayName: '2019' },
        { id: 1, displayName: '2020', default: true },
      ]
    },
    {
      control: 'select',
      name: 'month',
      class: 'col-12 col-md-3',
      label: 'Mese',
      disabled: false,
      required: true,
      options: [
        { id: 0, displayName: 'Tutti', default: true },
        { id: 1, displayName: 'Gennaio' },
        { id: 2, displayName: 'Febbraio' },
        { id: 3, displayName: 'Marzo' },
        { id: 4, displayName: 'Aprile' },
        { id: 5, displayName: 'Maggio' },
        { id: 6, displayName: 'Giugno' },
        { id: 7, displayName: 'Luglio' },
        { id: 8, displayName: 'Agosto' },
        { id: 9, displayName: 'Settembre' },
        { id: 10, displayName: 'Ottobre' },
        { id: 11, displayName: 'Novembre' },
        { id: 12, displayName: 'Dicembre' },
        { id: 13, displayName: '13esima' },
        { id: 14, displayName: '14esima' },
        { id: 15, displayName: 'C.U.' },
      ]
    }
  ];
}
