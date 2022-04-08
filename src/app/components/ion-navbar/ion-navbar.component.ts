import { Component, Input } from '@angular/core';

@Component({
  selector: 'nala-navbar',
  templateUrl: './ion-navbar.component.html',
  styleUrls: ['./ion-navbar.component.scss'],
})
export class IonNavbarComponent{
  @Input() title = '';
}
