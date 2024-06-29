import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinueEmailPage } from './continue-email.page';

const routes: Routes = [
  {
    path: '',
    component: ContinueEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinueEmailPageRoutingModule {}
