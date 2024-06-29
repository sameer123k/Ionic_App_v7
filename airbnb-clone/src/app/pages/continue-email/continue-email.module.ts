import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinueEmailPageRoutingModule } from './continue-email-routing.module';

import { ContinueEmailPage } from './continue-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinueEmailPageRoutingModule
  ],
  declarations: [ContinueEmailPage]
})
export class ContinueEmailPageModule {}
