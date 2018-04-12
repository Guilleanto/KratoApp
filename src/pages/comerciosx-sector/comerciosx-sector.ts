import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataServicio } from '../../providers/data/data';
import { DetallesComercioPage } from '../detalles-comercio/detalles-comercio';
import 'rxjs/add/operator/debounceTime';


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
  rate:any;
  termino: string = '';
  items:any;
  buscar_control: FormControl;
  searching: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public LoadCtrl: LoadingController, private _ds: DataServicio) {
    this.sector = this.navParams.get('sector');
    this._ds.filtrar_por_sector(this.sector.descripcion);
    this.buscar_control = new FormControl();
    
  }

  ionViewDidLoad() {


    let loading = this.LoadCtrl.create({
      spinner: 'dots',
      content: 'Buscando...'
    });
  
    loading.present();
    this.termino_buscar();
    this.buscar_control.valueChanges.debounceTime(700).subscribe(search => {
 
      this.termino_buscar();
      this.searching = false;
  });
    setTimeout(() => {
      this.comercios = this._ds.por_sector;
      
      console.log(this.comercios);
      loading.dismiss();
    }, 2000);
    
    
   
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
  termino_buscar() {
 
    this.items = this._ds.filtrar_busqueda(this.termino);

}
onCancel(){
  this.termino = '';
}
onSearchInput(){
  this.searching = true;
}
}
