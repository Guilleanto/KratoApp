import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataServicio } from '../../providers/data/data';
import { KronoUrl } from '../../config/url.servicio';
import { DetallesComercioPage } from '../detalles-comercio/detalles-comercio';
import { ProductosCategoriaPage } from '../productos-categoria/productos-categoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  store:any [] = [];
  categorias: any [] = [];
  lat:any;
  lng:any;
  image:any;
  detalles = DetallesComercioPage;
  constructor(public navCtrl: NavController, private _ds: DataServicio, private navaParams: NavParams) {
    this.cargar_data();
    this.cargar_categorias();
  }

 
  cargar_data(){
  this._ds.cargar_tiendas().subscribe(data =>{
    if (data.error){
      console.log(data.error);
    }else{
      this.store = data;
      this.lat = data.location_lat;
      this.lng = data.location_long;
      console.log(this.store);
    }
  })
}
  cargar_categorias(){
    this._ds.cargar_categorias().subscribe(data =>{
      if (data.error){
        console.log(data.error);
      }else{
        this.categorias = data;
        this.image = 'assets/';
        console.log(this.categorias);
      }
    })
  }
  ProductoPage(id){
      this.navCtrl.push(ProductosCategoriaPage, id) // Abrir pagina de productos por categoria con la id de la cat
      console.log(id);
  }
}
