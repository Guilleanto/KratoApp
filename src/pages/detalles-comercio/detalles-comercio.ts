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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.comercio = this.navParams.get('comercio');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesComercioPage');
  }

}
