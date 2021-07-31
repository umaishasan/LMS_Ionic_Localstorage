import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersPage } from './customers.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersPage
  },
  {
    path: 'customer-modal',
    loadChildren: () => import('./customer-modal/customer-modal.module').then( m => m.CustomerModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersPageRoutingModule {}
