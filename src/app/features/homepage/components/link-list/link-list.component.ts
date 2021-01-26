import { Component } from '@angular/core';
@Component({
  selector: 'wakala-homepage-links',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class HomepageLinkListComponent {
  links = [
    {
      title: 'Assenze',
      description: 'Gestione ferie, permessi e malattie',
      icon: 'work_off',
      color: '#00c0ef',
      class: 'col-12 col-lg-4 mb-2 p-0 pr-lg-2',
      link: '/Personal/Absences'
    },
    {
      title: 'Buste paga',
      description: 'Consulta i cedolini relativi allo stipendio',
      icon: 'euro_symbol',
      color: '#00a65a',
      class: 'col-12 col-lg-4 mb-2 p-0',
      link: '/Personal/PaySlips'
    },
    {
      title: 'Timesheet',
      description: 'Compila e visualizza il rapportino ogni mese',
      icon: 'calendar_today',
      color: '#605ca8',
      class: 'col-12 col-lg-4 mb-2 p-0 pl-lg-2',
      link: ''
    }
  ];
}
