import {Injectable, Inject, forwardRef} from '@angular/core';
import { DestinoViaje } from './destino-viaje.model';
import { HttpRequest, HttpHeaders, HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import {AppState} from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.models';

@Injectable()
export class DestinosApiClient {

  constructor(private store: Store<AppState> ) {
    //this.destinos = [];
  }

  add(d: DestinoViaje) {
    this.store.dispatch(new NuevoDestinoAction(d));
  }


  elegir(d: DestinoViaje) {
    this.store.dispatch(new ElegidoFavoritoAction(d));
  }

}
