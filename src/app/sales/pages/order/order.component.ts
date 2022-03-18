import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  isUpper: boolean = true;

  toggleUpper(){
    this.isUpper = !this.isUpper;
  }

}
