import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SectoresPage } from '../pages/sectores/sectores';
import { ComerciosxSectorPage } from '../pages/comerciosx-sector/comerciosx-sector';
import { DetallesComercioPage } from '../pages/detalles-comercio/detalles-comercio';

import { HttpModule} from '@angular/http';
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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ionic2RatingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCxVq0AccijXFh5gAykBBhzSSaVFsP-cwo'
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SectoresPage,
    ListPage,
    ComerciosxSectorPage,
    DetallesComercioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataServicio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
