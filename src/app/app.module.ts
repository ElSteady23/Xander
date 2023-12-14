//Utilizamos los import para importar funciones que han sido exportadas de un modulo externo
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: 
  [AppComponent],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    SwiperModule,
    HttpClientModule, 
    MaterialModule,
    BrowserAnimationsModule],

  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }],

  bootstrap: [
    AppComponent],

})
export class AppModule {}
