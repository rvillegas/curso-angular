import { Component, OnInit} from '@angular/core';
import {DestinoViaje} from '../models/destino-viaje.model';
import { ActivatedRoute } from '@angular/router';
import { DestinosApiClient } from '../models/destinos-api-client.model';

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css']
})
export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;

  constructor(private route: ActivatedRoute, private destinoApiCliente: DestinosApiClient) {

    }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.destino = null;
  };

}
