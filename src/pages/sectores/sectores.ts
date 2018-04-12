import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataServicio } from '../../providers/data/data';
import { ComerciosxSectorPage } from "../comerciosx-sector/comerciosx-sector";

@IonicPage()
@Component({
  selector: 'page-sectores',
  templateUrl: 'sectores.html',
})
export class SectoresPage {

  porSector = ComerciosxSectorPage;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _ds: DataServicio) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectoresPage');
  }

}
