import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFundPage } from './not-fund.page';

const routes: Routes = [
  {
    path: '',
    component: NotFundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFundPageRoutingModule {}
