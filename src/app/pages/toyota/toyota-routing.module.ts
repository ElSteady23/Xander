import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToyotaPage } from './toyota.page';

const routes: Routes = [
  {
    path: '',
    component: ToyotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToyotaPageRoutingModule {}
