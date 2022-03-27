import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  },
  {
    path: 'admin-roles',
    loadChildren: () => import('./pages/admin-roles/admin-roles.module').then( m => m.AdminRolesPageModule)
  },
  {
    path: 'admin-users',
    loadChildren: () => import('./pages/admin-users/admin-users.module').then( m => m.AdminUsersPageModule)
  },
  {
    path: 'home-users',
    loadChildren: () => import('./pages/home-users/home-users.module').then( m => m.HomeUsersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
