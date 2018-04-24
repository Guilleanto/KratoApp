import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  email:any = 'guillermo@gmail.com';
  password:any = '12345678';
  token:any;
  
  constructor(public navCtrl: NavController, private _ds: DataServicio,
     private navaParams: NavParams, private storage: Storage, private platform : Platform,
    public loader: LoadingController) {
  
      this.cargar_data();
    
    
  }
 
  cargar_data(){
    
    let loading = this.loader.create({
      spinner: 'dots',
      content: 'Iniciando...'
    });
    loading.present();
    this._ds.cargar_tiendas().then((data:any) =>{ 
        this.store = data;
        loading.dismiss();
        this.cargar_categorias();
    } );
    
}
  cargar_categorias(){
    let loading = this.loader.create({
      spinner: 'dots',
      content: 'Cargando Categorias...'
    });
  
    loading.present();
    this._ds.cargar_categorias().then((data:any) =>{
        this.categorias = data;
        this.image = 'assets/';
        console.log(this.categorias);
        loading.dismiss();
    })
  }

  // Abrir pagina de productos por categoria con la id de la cat
  ProductoPage(id, categoria){
      this.navCtrl.push(ProductosCategoriaPage, {
        id: id,
        categoria : categoria
        
      }); 
      console.log(id);
  }
}
