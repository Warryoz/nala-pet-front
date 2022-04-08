import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-ion-menu',
  templateUrl: './ion-menu.component.html',
  styleUrls: ['./ion-menu.component.scss'],
})
export class IonMenuComponent implements OnInit {


  title = 'Menú';

  menus = [
    {
      title: 'Home',
      url: '/tabs/tab1',
      icon: 'home'
    },
    {
      title: 'Calendario',
      url: '/tabs/tab2',
      icon: 'calendar'
    },
    {
      title: 'Mascotas',
      url: '/tabs/pets',
      icon: 'paw'
    },
    {
      title: 'Usuarios',
      url: '/tabs/tab4',
      icon: 'person'
    },
    {
      title: 'Citas',
      url: '/tabs/tab5',
      icon: 'folder-open'
    },

  ]

  constructor(private menucontroller: MenuController) { }

  ngOnInit() {}

  closeMenu() {

    this.menucontroller.close();

  }

}
