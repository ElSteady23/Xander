import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotFundPageRoutingModule } from './not-fund-routing.module';

import { NotFundPage } from './not-fund.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotFundPageRoutingModule
  ],
  declarations: [NotFundPage]
})
export class NotFundPageModule {}
