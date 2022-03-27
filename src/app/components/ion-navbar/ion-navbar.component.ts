import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-navbar',
  templateUrl: './ion-navbar.component.html',
  styleUrls: ['./ion-navbar.component.scss'],
})
export class IonNavbarComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit() {}

}
