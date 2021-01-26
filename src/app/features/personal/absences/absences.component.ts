import { Component } from '@angular/core';
@Component({
  selector: 'wakala-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent {
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
      name: 'tipology',
      class: 'col-12 col-md-2',
      label: 'Tipologia',
      disabled: false,
      required: true,
      options: [
        { id: 0, displayName: 'Tutte', default: true },
        { id: 1, displayName: 'Ferie' },
        { id: 2, displayName: 'Malattia' },
        { id: 3, displayName: 'Permesso' },
      ]
    }
  ];
}
