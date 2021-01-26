import { Component } from '@angular/core';
@Component({
  selector: 'wakala-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  formTemplate = [
    {
      control: 'rangePicker',
      name: 'periodPicker',
      class: 'col-12 col-md-4',
      label: 'Periodo',
      disabled: false,
      required: true,
      startDate: null,
      endDate: null
    },
    {
      control: 'select',
      name: 'month',
      class: 'col-12 col-md-4',
      label: 'Mese',
      disabled: false,
      required: true,
      options: [
        { id: 0, displayName: 'Tutte', default: true },
        { id: 1, displayName: 'Assunzioni' },
        { id: 2, displayName: 'Business' },
        { id: 3, displayName: 'Formazione' },
        { id: 4, displayName: 'Job Posting' },
        { id: 5, displayName: 'Progetti' },
        { id: 6, displayName: 'Ristorazione' },
        { id: 7, displayName: 'Salute' },
        { id: 8, displayName: 'Servizio' },
        { id: 9, displayName: 'Sport' },
        { id: 10, displayName: 'Viaggi' },
      ]
    },
  ];
}
