import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentPayoutsPage } from './payment-payouts.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentPayoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPayoutsPageRoutingModule {}
