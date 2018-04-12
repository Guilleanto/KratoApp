import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallesComercioPage } from './detalles-comercio';

@NgModule({
  declarations: [
    DetallesComercioPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallesComercioPage),
  ],
})
export class DetallesComercioPageModule {}
