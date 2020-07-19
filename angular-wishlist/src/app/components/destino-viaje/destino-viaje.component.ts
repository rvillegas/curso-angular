import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from './../../models/destino-viaje.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';
import { VoteUpAction, VoteDownAction } from '../../models/destinos-viajes-state.models';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css'],
  animations: [
    trigger('esFavorito', [
      state('estadoFavorito', style({
        backgroundColor: 'paleTurquoise'
      })),
      state('estadoNoFavorito', style({
        backgroundColor: 'whiteSmoke'
      })),
      transition('estadoNoFavorito => estadoFavorito', [
        animate('3s')
      ]),
      transition('estadoFavorito => estadoNoFavorito', [
        animate('1s')
      ]),
    ]),
  ]
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @Input('idx') posision: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() onClicked: EventEmitter<DestinoViaje>;


  constructor(private store: Store<AppState>) {
    this.onClicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir() {

    this.onClicked.emit(this.destino);
    return false;

  }

  voteUp() {
    this.store.dispatch(new VoteUpAction(this.destino));
    return false;
  }
  voteDown() {
    this.store.dispatch(new VoteDownAction(this.destino));
    return false;
  }
}
