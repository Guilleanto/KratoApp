import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { HttpClient,  } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { KronoUrl, Kronodev } from '../../config/url.servicio';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

// https://krono-dev-3.herokuapp.com/
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
email:any = 'guillermo@gmail.com';
password:any = '12345678';
token:any;

  constructor(public http: Http, public Http2 : HttpClient,private platform: Platform, private storage: Storage) {
    
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
 cargar_productos(cat){
  if(this.platform.is("cordova")){
    this.storage.get("token").then((val) => {
      this.token = val;
      
    });
   }else{
    this.token = localStorage.getItem("tokenLocal");
    console.log(this.token);
   }
  let headers = new Headers();
  headers.append( 'Content-Type', 'application/json');
  headers.append('Authorization', 'JWT '+this.token);
   let url = KronoUrl+'/chain/'+this.chain +'/store/'+this.tienda+'/category/'+cat+'/products/';
   return new Promise(resolve =>{
    this.http.get(url, {headers: headers} ).map(resp => resp.json()).subscribe(data => {
      resolve(data)
      console.log(data);
    },err =>{
      console.log(err);
    });
 });
 }

 cargar_usuario(email:string, pass:string){ //cargar token de sesion administrador
   
  let headers = new Headers();
  headers.append( 'Content-Type', 'application/json');
  let body = { 
    'email': email,
    'password': pass
  };
   let url = Kronodev+'/api-token-auth-administrator/';

   return new Promise(resolve => {
      this.http.post(url, JSON.stringify(body), {headers: headers})
      .map(resp => resp.json()).subscribe( data => {
       resolve(data);
       if(this.platform.is("cordova")){
        this.storage.set('token', data.token);
       }else{
        localStorage.setItem("tokenLocal", data.token);
       }
      
      },err =>{
        console.log(err);
      }) 
   });
 }



 /*cargar_sector(){
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
*/
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
