import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  isUpper: boolean = true;
  heros: Hero[] = [
    {
      name:'Superman',
      flying: true,
      color: Color.blue
    },
    {
      name:'Batman',
      flying: false,
      color: Color.black
    },
    {
      name:'Robin',
      flying: false,
      color: Color.green
    },
    {
      name:'Daredevil',
      flying: false,
      color: Color.red
    },
    {
      name:'Linterna verde',
      flying: true,
      color: Color.green
    }
  ];

  orderBy: string = '';

  toggleUpper(){
    this.isUpper = !this.isUpper;
  }

  changeOrder( value: string){
    this.orderBy = value;
  }

}
