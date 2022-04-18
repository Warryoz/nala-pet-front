import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePetsPageRoutingModule } from './home-pets-routing.module';

import { HomePetsPage } from './home-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePetsPageRoutingModule
  ],
  declarations: [HomePetsPage]
})
export class HomePetsPageModule {}
