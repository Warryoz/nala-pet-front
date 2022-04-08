import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'nala-menu',
  templateUrl: './ion-menu.component.html',
  styleUrls: ['./ion-menu.component.scss'],
})
export class IonMenuComponent {

  title = 'Menú';

  menus = [
    {
      title: 'Inicio',
      url: '/tabs/tab1',
      icon: 'home-outline'
    },
    {
      title: 'Calendario',
      url: '/tabs/tab2',
      icon: 'calendar-outline'
    },
    {
      title: 'Mascotas',
      url: '/tabs/pets',
      icon: 'paw-outline'
    },
    {
      title: 'Usuarios',
      url: '/tabs/tab4',
      icon: 'person-outline'
    },
    {
      title: 'Citas',
      url: '/tabs/tab5',
      icon: 'folder-open-outline'
    },

  ];

  constructor(private menucontroller: MenuController) { }

  closeMenu() {
    this.menucontroller.close();
  }

}
