import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCalendarPageRoutingModule } from './admin-calendar-routing.module';

import { AdminCalendarPage } from './admin-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCalendarPageRoutingModule
  ],
  declarations: [AdminCalendarPage]
})
export class AdminCalendarPageModule {}
