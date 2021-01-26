import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'customDate' })
export class CustomDate implements PipeTransform {

  transform(date: string): string {
    const convertedDate = new Date(date);
    return convertedDate.toLocaleDateString('IT-it');
  }
}
