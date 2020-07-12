import { Injectable, Inject, forwardRef } from '@angular/core';
import { DestinoViaje } from './destino-viaje.model';
import { HttpClientModule, HttpRequest, HttpHeaders, HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, APP_CONFIG, AppConfig, db } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.models';

import { inject } from '@angular/core/testing';
@Injectable()
export class DestinosApiClient {
  destinos: DestinoViaje[] = [];

  constructor(private store: Store<AppState>,
    @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig,
    private http: HttpClient) {
    this.store
      .select(state => state.destinos)
      .subscribe((data) => {
        console.log('destinos sub store');
        console.log(data);
        this.destinos = data.items;
      });
    this.store.subscribe((data) => {
      console.log('all store');
      console.log(data);
    });
  }


  add(d: DestinoViaje) {
    const headers: HttpHeaders = new HttpHeaders({ 'X-API-TOKEN': 'token-seguridad' });
    const req = new HttpRequest('POST', this.config.apiEndpoint + '/my', { nuevo: d.nombre }, { headers: headers });
    this.http.request(req).subscribe((data: HttpResponse<{}>) => {
      if (data.status === 200) {
        this.store.dispatch(new NuevoDestinoAction(d));
        const myDb = db;
        myDb.destinos.add(d);
        console.log('Todos los destinos de la db!');
        myDb.destinos.toArray().then(destinos => console.log(destinos));
      }
    });
    //this.store.dispatch(new NuevoDestinoAction(d));
  }


  getAll(): DestinoViaje[] {
    return this.destinos;
  }
  getById(id: string): DestinoViaje {
    return this.destinos.filter(function (d) { return d.id.toString() === id; })[0];
    //return this.store.pipe()
    return null;
  }


  elegir(d: DestinoViaje) {
    this.store.dispatch(new ElegidoFavoritoAction(d));
  }

}

@Injectable()
export class DestinosApiClientViejo {
  destinos: DestinoViaje[] = [];

  constructor(private store: Store<AppState>,
    @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig,
    private http: HttpClient) {
      console.log('******************useExisting*******************');
    this.store
      .select(state => state.destinos)
      .subscribe((data) => {
        console.log('destinos sub store');
        console.log(data);
        this.destinos = data.items;
      });
    this.store.subscribe((data) => {
      console.log('all store');
      console.log(data);
    });
  }


  add(d: DestinoViaje) {
    const headers: HttpHeaders = new HttpHeaders({ 'X-API-TOKEN': 'token-seguridad' });
    const req = new HttpRequest('POST', this.config.apiEndpoint + '/my', { nuevo: d.nombre }, { headers: headers });
    this.http.request(req).subscribe((data: HttpResponse<{}>) => {
      if (data.status === 200) {
        this.store.dispatch(new NuevoDestinoAction(d));
        const myDb = db;
        myDb.destinos.add(d);
        console.log('Todos los destinos de la db!');
        myDb.destinos.toArray().then(destinos => console.log(destinos));
      }
    });
    //this.store.dispatch(new NuevoDestinoAction(d));
  }


  getAll(): DestinoViaje[] {
    return this.destinos;
  }
  getById(id: string): DestinoViaje {
    return this.destinos.filter(function (d) { return d.id.toString() === id; })[0];
    //return this.store.pipe()
    return null;
  }


  elegir(d: DestinoViaje) {
    this.store.dispatch(new ElegidoFavoritoAction(d));
  }

}

@Injectable()
export class DestinosApiClientCopia extends DestinosApiClient {
  constructor(store: Store<AppState>,
    @Inject(forwardRef(() => APP_CONFIG))  config: AppConfig,
    http: HttpClient) {
      console.log('******************useClases*******************');
      super(store, config, http);
    }


}

