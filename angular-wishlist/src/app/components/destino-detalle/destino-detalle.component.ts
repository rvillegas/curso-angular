import { Component, OnInit, Injectable, forwardRef, Inject } from '@angular/core';
import { DestinoViaje } from '../../models/destino-viaje.model';
import { ActivatedRoute } from '@angular/router';
import { DestinosApiClient, DestinosApiClientCopia, DestinosApiClientViejo } from '../../models/destinos-api-client.model';
import { Store } from '@ngrx/store';
import { AppState, AppConfig } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css'],
  providers: [
    DestinosApiClient,
    { provide: DestinosApiClient, useClass: DestinosApiClientCopia},
    { provide: DestinosApiClientViejo, useExisting: DestinosApiClient}
  ]
})


export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;

  constructor(private route: ActivatedRoute, private destinoApiCliente: DestinosApiClient) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.destino = this.destinoApiCliente.getById(id);
  }

}
