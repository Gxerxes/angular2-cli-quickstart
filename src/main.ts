import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes'
import { HTTP_PROVIDERS } from '@angular/http';
import {FIREBASE_PROVIDERS, defaultFirebase} from "angularfire2/angularfire2";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, FIREBASE_PROVIDERS, defaultFirebase({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: ""
})
]);

