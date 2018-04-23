import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServicio } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-productos-categoria',
  templateUrl: 'productos-categoria.html',
})
export class ProductosCategoriaPage {
  id_cat:any;
  productos: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _ds: DataServicio) {
    //console.log(this.navParams.get('id'));
    this.id_cat = this.navParams.get('id');
  }

ionViewDidLoad() {
   
    this.cargar_productos(this.id_cat);
  }
cargar_productos(cat){
    this._ds.cargar_productos(cat).subscribe(data => {
      if(data.error){
        console.log(data.error);
      }else{
        this.productos = data;
        console.log(this.productos);
      }
    })
}
}
