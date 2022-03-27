import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRolesPageRoutingModule } from './admin-roles-routing.module';

import { AdminRolesPage } from './admin-roles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRolesPageRoutingModule
  ],
  declarations: [AdminRolesPage]
})
export class AdminRolesPageModule {}
