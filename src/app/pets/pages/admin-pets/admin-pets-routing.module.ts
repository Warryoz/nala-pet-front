import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPetsPage } from './admin-pets.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPetsPageRoutingModule {}
