import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NissanPageRoutingModule } from './nissan-routing.module';

import { NissanPage } from './nissan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NissanPageRoutingModule
  ],
  declarations: [NissanPage]
})
export class NissanPageModule {}
