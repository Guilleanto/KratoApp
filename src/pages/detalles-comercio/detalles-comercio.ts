import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallesComercioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles-comercio',
  templateUrl: 'detalles-comercio.html',
})
export class DetallesComercioPage {
comercio:any;
lat: number ;
  lng: number ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.comercio = this.navParams.get('comercio');
    this.lat = this.comercio.latitude;
    this.lng = this.comercio.longitude;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesComercioPage');
  }

}
