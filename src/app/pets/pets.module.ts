import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetsPage } from './pets.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PetsPageRoutingModule } from './pets-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: PetsPage }]),
    PetsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PetsPage]
})
export class PetsPageModule {}
