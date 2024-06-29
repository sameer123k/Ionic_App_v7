import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainHome2PageRoutingModule } from './main-home2-routing.module';

import { MainHome2Page } from './main-home2.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainHome2PageRoutingModule
  ],
  declarations: [MainHome2Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainHome2PageModule {}
