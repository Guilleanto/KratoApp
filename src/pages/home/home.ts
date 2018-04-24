import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
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
     private navaParams: NavParams, private storage: Storage, private platform : Platform) {
  
    this.cargar_data();
    this.cargar_categorias();
    this.usuario();
    
  }
 
  cargar_data(){
    this._ds.cargar_tiendas().then((data:any) =>{ // importando la nueva libreria angular HttpClient (ANGULAR 4)
        this.store = data;
    } );
    
}
  cargar_categorias(){
    this._ds.cargar_categorias().then((data:any) =>{
        this.categorias = data;
        this.image = 'assets/';
        console.log(this.categorias);
    })
  }
  ProductoPage(id){
      this.navCtrl.push(ProductosCategoriaPage, {id: id}); // Abrir pagina de productos por categoria con la id de la cat
      console.log(id);
  }
  usuario(){
    this._ds.cargar_usuario(this.email, this.password).then((data:any)=>{
      console.log(data);
    })
  }
}
