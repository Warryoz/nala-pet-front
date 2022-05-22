import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetsPage } from './pets.page';

import { PetsPageRoutingModule } from './pets-routing.module';
import { ComponentsModule } from '../components/components.module';

import { CardModule } from 'primeng/card';
import { PetsFormPageModule } from './pet-form/pet-form.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PetsPageRoutingModule,
    PetsFormPageModule,
    ComponentsModule,
    CardModule,
  ],
  declarations: [PetsPage]
})
export class PetsPageModule {}
