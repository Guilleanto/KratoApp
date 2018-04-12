import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServicio } from '../../providers/data/data';



@IonicPage()
@Component({
  selector: 'page-comerciosx-sector',
  templateUrl: 'comerciosx-sector.html',
})
export class ComerciosxSectorPage {
  sector: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _ds: DataServicio) {
    this.sector = this.navParams.get('sector');
    
    this._ds.filtrar_por_sector(this.sector.descripcion);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComerciosxSectorPage');
  }

}
