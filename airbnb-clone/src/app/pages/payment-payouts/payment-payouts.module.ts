import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPayoutsPageRoutingModule } from './payment-payouts-routing.module';

import { PaymentPayoutsPage } from './payment-payouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPayoutsPageRoutingModule
  ],
  declarations: [PaymentPayoutsPage]
})
export class PaymentPayoutsPageModule {}
