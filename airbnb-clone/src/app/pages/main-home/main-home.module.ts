import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainHomePageRoutingModule } from './main-home-routing.module';

import { MainHomePage } from './main-home.page';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainHomePageRoutingModule,
    FooterModule,
  ],
  declarations: [MainHomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainHomePageModule {}
