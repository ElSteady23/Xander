import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToyotaPageRoutingModule } from './toyota-routing.module';

import { ToyotaPage } from './toyota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToyotaPageRoutingModule
  ],
  declarations: [ToyotaPage]
})
export class ToyotaPageModule {}
