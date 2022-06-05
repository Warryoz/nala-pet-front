import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonNavbarComponent } from './ion-navbar/ion-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IonNavbarComponent
  ],
  exports: [
    IonNavbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
