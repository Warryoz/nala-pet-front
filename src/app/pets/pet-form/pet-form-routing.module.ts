import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetFormPage } from './pet-form.page';

const routes: Routes = [
  {
    path: '',
    component: PetFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsFormPageRoutingModule {}
