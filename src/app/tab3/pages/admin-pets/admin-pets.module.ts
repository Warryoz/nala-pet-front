import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPetsPageRoutingModule } from './admin-pets-routing.module';

import { AdminPetsPage } from './admin-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPetsPageRoutingModule
  ],
  declarations: [AdminPetsPage]
})
export class AdminPetsPageModule {}
