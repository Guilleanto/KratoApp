import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { URL_SERVICIOS } from '../../config/url.servicio';

@Injectable()
export class DataServicio {
comercios: any;
sectores: any;
por_sector: any[]= [];

  constructor(public http: Http) {
    
    this.cargar_data();
    this.cargar_sector();
  }


cargar_sector(){
  let url = 'assets/sectores.json';
  this.http.get(url).map( resp => resp.json()).subscribe(data => {
    if (data.error){
      console.log(data.error);
    }else{
      this.sectores = data.sectores;
      console.log(this.sectores);
    }
  })
}


cargar_data( ){
  let url = 'assets/data2.json';
  this.http.get(url).map(resp => resp.json()).subscribe(data => {
    console.log();
    if(data.error){
      console.log(data.error);
    }else{
      this.comercios = data.comercios ;
      console.log(this.comercios);
    }
    
  })
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
