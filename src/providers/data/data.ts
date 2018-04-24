import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { HttpClient,  } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { KronoUrl, Kronodev } from '../../config/url.servicio';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';


// https://github.com/angular/angular/tree/master/packages/common/http LIBRERIA HTTP ANGULAR 4

@Injectable()
export class DataServicio {
comercios: any;
sectores: any;
por_sector: any[]= [];
chain:any = 18;
tienda: any = 25;
categorias:any;
store: any[]  = [];


  constructor(public http: Http, public Http2 : HttpClient,private platform: Platform,
     private storage: Storage) {
    this.cargar_categorias();
  }


  cargar_tiendas(){ // Nueva Libreria Angular HttpClientModule (Angular 4)
    let  url = KronoUrl+'/chain/'+this.chain +'/store/'+this.tienda +'/';
    return new Promise(resolve =>{
      this.Http2.get(url).subscribe(data => {
        resolve(data)
      },err =>{
        console.log(err);
      });
   });
 }
 cargar_categorias(){// Nueva Libreria Angular HttpClientModule (Angular 4)
  let url = KronoUrl+'/chain/'+this.chain +'/store/'+this.tienda +'/categories/';
    return new Promise(resolve =>{
      this.Http2.get(url).subscribe(data => {
        resolve(data)
      },err =>{
        console.log(err);
      });
  });
 }

  filtrar_por_sector(se:string){
    let url ="assets/data2.json";
    this.http.get(url).map(resp => resp.json()).subscribe(data => {
      console.log();
        if(data.error){
          console.log(data.error);
        }else{
          this.por_sector = data.comercios ;
          this.por_sector = this.por_sector.filter(a=>a.sector==se);
          console.log(this.por_sector);
      }
    });
  }
  filtrar_busqueda(termino:any){
  
    return this.por_sector.filter((item) => {
        return item.company.toLowerCase().indexOf(termino.toString().toLowerCase()) > -1;
      // return item.descripcion.toLowerCase().indexOf(termino.toString().toLowerCase()) > -1;
    });
  }

}
