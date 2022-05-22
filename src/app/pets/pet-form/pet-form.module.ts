import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsFormPageRoutingModule } from './pet-form-routing.module';

import { PetFormPage } from './pet-form.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    PetsFormPageRoutingModule
  ],
  declarations: [PetFormPage]
})
export class PetsFormPageModule {}
