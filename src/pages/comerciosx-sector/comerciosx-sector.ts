import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServicio } from '../../providers/data/data';
import { DetallesComercioPage } from '../detalles-comercio/detalles-comercio';


@IonicPage()
@Component({
  selector: 'page-comerciosx-sector',
  templateUrl: 'comerciosx-sector.html',
})
export class ComerciosxSectorPage {
  sector: any;
  detalles = DetallesComercioPage;
  rating:boolean = false;
  comercios:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _ds: DataServicio) {
    this.sector = this.navParams.get('sector');
    
    this._ds.filtrar_por_sector(this.sector.descripcion);
    this.comercios = this._ds.por_sector;
  }

  ionViewDidLoad() {
    this.rating = false;
    console.log('ionViewDidLoad ComerciosxSectorPage');
  }
  
  sortRatings(){
    let opcion ;
    if(this.rating){
      opcion = 'desc';
    }else{
      opcion = 'asc';
    }
    return this.comercios.sort(function(a,b){
      var x = a['rating'],
      y = b['rating'];

      if (opcion == 'asc') {
        console.log( 'ordenado ascendente');
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    if (opcion == 'desc') {
      console.log('ordenado descendente');
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    }
    });
  }

}
