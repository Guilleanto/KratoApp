# Ionic KRATO APP

## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/Guilleanto/KratoApp.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: You may need to add “sudo” in front of any global commands to install the utilities._

## Deploying

 run `npm run ionic:build --prod` and then push the `www` folder to your favorite hosting service
* Android - Run `ionic cordova run android --prod`
  - If you are deploying to Android 4.4 or below we recommend adding crosswalk: `cordova plugin add cordova-plugin-crosswalk-webview`
* iOS - Run `ionic cordova run ios --prod`

## Libreria ANGULAR 4 HTTPCLIENT Y HTTPCLIENTMODULE

https://github.com/angular/angular/tree/master/packages/common/http

* run 
* `npm install @angular/common@latest --save`
* `npm install @angular/compiler@latest --save`
* `npm install @angular/compiler-cli@latest --save`
* `npm install @angular/core@latest --save`
* `npm install @angular/forms@latest --save`
* `npm install @angular/http@latest --save`
* `npm install @angular/platform-browser@latest --save`
* `npm install @angular/platform-browser-dynamic@latest --save`

Next, open and edit 'src/app/app.module.ts' then add this import.

```typescript
import { HttpClientModule } from '@angular/common/http';

Then register it to '@NgModule' imports after 'BrowserModule', so it will look like this.

imports: [
  BrowserModule,
  HttpClientModule,
  IonicModule.forRoot(MyApp)
],
```
  then import at the provider.ts
  
```typescript
import { HttpClient } from '@angular/common/http';
```
Constructor
```typescript
constructor(public http: HttpClient) {
  console.log('Hello RestServiceProvider Provider');
}
```