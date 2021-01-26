import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'faConvertIcon' })
export class FaConvertIcon implements PipeTransform {
  iconDictionary = {
    'fa fa-cogs': 'settings',
    'fa fa-eur': 'euro_symbol',
    'fa fa-cutlery': 'restaurant',
    'fa fa-medkit': 'medical_services',
    'fa fa-futbol-o': 'sports_soccer',
    'fa fa-plane': 'airplanemode_active',
    'fa fa-user': 'personal',
    'fa fa-info': 'info',
    'fa fa-search': 'search',
    'fa fa-graduation-cap': 'school',
  };

  transform(icon: string): string {
    return this.iconDictionary[icon];
  }
}
