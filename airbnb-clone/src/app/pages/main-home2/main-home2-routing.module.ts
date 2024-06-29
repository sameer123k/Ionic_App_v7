import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHome2Page } from './main-home2.page';

const routes: Routes = [
  {
    path: '',
    component: MainHome2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainHome2PageRoutingModule {}
