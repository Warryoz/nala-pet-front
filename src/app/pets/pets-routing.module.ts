import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsPage } from './pets.page';

const routes: Routes = [
  {
    path: '',
    component: PetsPage,
  },
  {
    path: 'admin-pets',
    loadChildren: () => import('./pages/admin-pets/admin-pets.module').then( m => m.AdminPetsPageModule)
  },
  {
    path: 'home-pets',
    loadChildren: () => import('./pages/home-pets/home-pets.module').then( m => m.HomePetsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsPageRoutingModule {}
