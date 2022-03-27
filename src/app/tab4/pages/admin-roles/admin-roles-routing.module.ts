import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRolesPage } from './admin-roles.page';

const routes: Routes = [
  {
    path: '',
    component: AdminRolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRolesPageRoutingModule {}
