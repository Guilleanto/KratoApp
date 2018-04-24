import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { DataServicio } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { URL_SERVICIOS, Kronodev, KronoUrl } from '../../config/url.servicio';


@IonicPage()
@Component({
  selector: 'page-productos-categoria',
  templateUrl: 'productos-categoria.html',
})
export class ProductosCategoriaPage {
  id_cat:any;
  cat: any;
  productos: any[] = [];
  email:any = 'guillermo@gmail.com';
  password:any = '12345678';
  token:any;
  chain:any = 18;
  tienda: any = 25;
  
  constructor(public navCtrl: NavController, 
    private storage: Storage, public navParams: NavParams,
     private platform: Platform, private _ds: DataServicio, public loader: LoadingController,
    public http : Http) {
    //console.log(this.navParams.get('id'));
    this.id_cat = this.navParams.get('id');
    this.cat = this.navParams.get('categoria');
  }

ionViewDidLoad() {
   
    this.cargar_productos(this.id_cat);
  }

cargar_productos(cat){
 

  let headers = new Headers();
  headers.append( 'Content-Type', 'application/json');
  let body = { 
    'email': this.email,
    'password': this.password
  };
  let url = Kronodev+'/api-token-auth-administrator/';
        this.http.post(url, JSON.stringify(body), {headers: headers})
          .map(resp => resp.json()).subscribe( data => {
              this.token = data.token;
              console.log(this.token);
            this.cargar_productos_servicio(this.token, cat);
              },err =>{
                console.log(err);
          }) 
  
 }

  cargar_productos_servicio(token:any, cat:any){
    let loading = this.loader.create({
      spinner: 'dots',
      content: 'Cargando Productos...'
    });
    loading.present();
    let headers2 = new Headers();
      headers2.append( 'Content-Type', 'application/json');
      headers2.append('Authorization', 'JWT '+token);
    let url2 = KronoUrl+'/chain/'+this.chain +'/store/'+this.tienda+'/category/'+cat+'/products/';
    
    return new Promise(resolve =>{
        this.http.get(url2, {headers: headers2} ).map(resp => resp.json()).subscribe(data => {
          this.productos = data;
          resolve(data)
          loading.dismiss();
          console.log(data);
        },err =>{
          console.log(err);
        });
      });
  }
}
