import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },  {
    path: 'admin-calendar',
    loadChildren: () => import('./pages/admin-calendar/admin-calendar.module').then( m => m.AdminCalendarPageModule)
  },
  {
    path: 'home-calendar',
    loadChildren: () => import('./pages/home-calendar/home-calendar.module').then( m => m.HomeCalendarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
