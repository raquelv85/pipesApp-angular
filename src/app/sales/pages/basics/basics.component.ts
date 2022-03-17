import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  nameLower: string = 'raquel';
  nameUpper: string = 'RAQUEL';
  fullName: string = 'rAquEl ViLlaVerDe';

  date: Date = new Date();

}
