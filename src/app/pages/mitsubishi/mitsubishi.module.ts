import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MitsubishiPageRoutingModule } from './mitsubishi-routing.module';

import { MitsubishiPage } from './mitsubishi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MitsubishiPageRoutingModule
  ],
  declarations: [MitsubishiPage]
})
export class MitsubishiPageModule {}
