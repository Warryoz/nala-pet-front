import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsPage } from './pets.page';

import { PetsPageRoutingModule } from './pets-routing.module';
import { ComponentsModule } from '../components/components.module';

import { PetsFormPageModule } from './pet-form/pet-form.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PetsPageRoutingModule,
    PetsFormPageModule,
    ComponentsModule,
  ],
  declarations: [PetsPage]
})
export class PetsPageModule {}
