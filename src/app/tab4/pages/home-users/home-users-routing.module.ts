import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeUsersPage } from './home-users.page';

const routes: Routes = [
  {
    path: '',
    component: HomeUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeUsersPageRoutingModule {}
