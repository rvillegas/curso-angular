import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from './../../models/destino-viaje.model';
import { DestinosApiClient } from './../../models/destinos-api-client.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../../models/destinos-viajes-state.models';


@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [DestinosApiClient]
})


export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;

  constructor(
    private destinosApiClient: DestinosApiClient,
    private store: Store<AppState>
  ) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    // esto se corre cuando cambia el favorito

    //this.store.select(state => state.destinos.items).subscribe(items => this.all = items);

  }

  ngOnInit() {
    this.store.select(state => state.destinos.favorito)
      .subscribe(data => {
        const d = data;
        if (d != null) {
          this.updates.push('Se ha elegido a ' + d.nombre);
        }
      });


  }
  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViaje) {
    this.destinosApiClient.elegir(e);

  }

  getAll(): DestinoViaje[] {
   return this.destinosApiClient.getAll();
  }
}


