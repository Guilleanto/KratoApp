import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SectoresPage } from './sectores';

@NgModule({
  declarations: [
    SectoresPage,
  ],
  imports: [
    IonicPageModule.forChild(SectoresPage),
  ],
})
export class SectoresPageModule {}
