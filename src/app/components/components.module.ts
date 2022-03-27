import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonMenuComponent } from './ion-menu/ion-menu.component';
import { IonNavbarComponent } from './ion-navbar/ion-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IonMenuComponent,
    IonNavbarComponent
  ],
  exports: [
    IonMenuComponent,
    IonNavbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
