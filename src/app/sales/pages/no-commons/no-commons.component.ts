import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {
  //i18nSelect
  name: string = 'Raquel';
  gender: string = 'female';

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  //i18nPlural

  clients: string[] = ['','','',''];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  };

  changeClient(){
    this.name = 'Carlos';
    this.gender = 'male';
  };

  deleteClient(){
    this.clients.pop();
  };
}
