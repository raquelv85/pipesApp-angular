import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  clients: string[] = ['cliente1','cliente2','cliente3','cliente4'];
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

  //keyValue Pipe
  person = {
    name: 'Raquel',
    age: 35,
    address: 'Madrid'
  };

  //jsonPipe
  heros = [
    {
      name: 'Superman',
      flying: true
    },
    {
      name: 'Robin',
      flying: false
    },
    {
      name: 'Aquaman',
      flying: false
    }
  ];

  //Async pipe
  myObservable = interval(1000);

  promiseValue = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('fin de la promesa')
    }, 3500);

  })
}
