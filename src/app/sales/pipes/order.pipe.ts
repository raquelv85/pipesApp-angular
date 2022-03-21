import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'customOrderPipe',
})
export class OrderPipe implements PipeTransform {
  transform(heros: Hero[], orderBy: string = ''): Hero[] {
    switch (orderBy) {
      case 'name':
        return heros.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'flying':
        return heros.sort((a, b) => (a.flying > b.flying ? -1 : 1));
      case 'color':
        return heros.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return heros;
    }
  }
}
