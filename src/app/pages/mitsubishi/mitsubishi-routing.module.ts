import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MitsubishiPage } from './mitsubishi.page';

const routes: Routes = [
  {
    path: '',
    component: MitsubishiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MitsubishiPageRoutingModule {}
