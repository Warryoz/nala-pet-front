import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCalendarPage } from './admin-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCalendarPageRoutingModule {}
