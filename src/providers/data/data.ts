import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL_SERVICIOS } from '../../config/url.servicio';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
comercios: any[] = [];


  constructor(public http: Http) {
    //console.log('Hello DataProvider Provider');
    this.cargar_data();
  }

cargar_data( ){
  let url = URL_SERVICIOS;
  this.http.get(url).map(resp => resp.json()).subscribe(data => {
    console.log();
    if(data.error){
      console.log(data.error);
    }else{
      this.comercios.push (data.comercios);
      console.log(this.comercios);
    }
    
  })
}

}
