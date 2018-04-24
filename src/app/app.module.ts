import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import * as axios from 'axios'
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SectoresPage } from '../pages/sectores/sectores';
import { ComerciosxSectorPage } from '../pages/comerciosx-sector/comerciosx-sector';
import { DetallesComercioPage } from '../pages/detalles-comercio/detalles-comercio';
import { ProductosCategoriaPage } from '../pages/productos-categoria/productos-categoria';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Ionic2RatingModule } from 'ionic2-rating';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServicio } from '../providers/data/data';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SectoresPage,
    ComerciosxSectorPage,
    DetallesComercioPage,
    ProductosCategoriaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    Ionic2RatingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCxVq0AccijXFh5gAykBBhzSSaVFsP-cwo'
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SectoresPage,
    ListPage,
    ComerciosxSectorPage,
    DetallesComercioPage,
    ProductosCategoriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataServicio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
