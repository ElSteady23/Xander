import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NissanPage } from './nissan.page';

const routes: Routes = [
  {
    path: '',
    component: NissanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NissanPageRoutingModule {}
