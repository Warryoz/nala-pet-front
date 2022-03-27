import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUsersPageRoutingModule } from './home-users-routing.module';

import { HomeUsersPage } from './home-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUsersPageRoutingModule
  ],
  declarations: [HomeUsersPage]
})
export class HomeUsersPageModule {}
