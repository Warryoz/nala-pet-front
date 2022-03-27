import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePetsPage } from './home-pets.page';

const routes: Routes = [
  {
    path: '',
    component: HomePetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePetsPageRoutingModule {}
