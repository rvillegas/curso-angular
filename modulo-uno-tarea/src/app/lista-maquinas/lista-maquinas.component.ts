import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Maquinaria } from './../models/maquinaria.model';

@Component({
  selector: 'app-lista-maquinas',
  templateUrl: './lista-maquinas.component.html',
  styleUrls: ['./lista-maquinas.component.css']
})

export class ListaMaquinasComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Maquinaria>;
  maquinas: Maquinaria[];
  constructor() {
    this.onItemAdded = new EventEmitter();
    this.maquinas = [];
    this.maquinas.push(new Maquinaria('RO-20', 'Excavadora de orugas','Caterpillar', '320C', 1230));
    this.maquinas.push(new Maquinaria('BO-35', 'Buldocer de orugas','Caterpillar', 'D9T' , 22345));
    this.maquinas.push(new Maquinaria('TP-16', 'Pavimentadora','Vogele', '1800-3', 2200));
    this.maquinas.push(new Maquinaria('VD-400', 'Volqueta Doble Troque', 'DAF', 'CF85', 7000));
    this.maquinas.push(new Maquinaria('BO-28', 'Buldocer de orugas', 'Caterpillar', 'D6N', 22345));
  }
  ngOnInit(): void {
  }
  agregado(m: Maquinaria){
    //this.destinosApiClient.add(d); falta 
    this.maquinas.push(m);
    this.onItemAdded.emit(m);
  }
  guardar(codigo: string, descripcion: string, marca: string, modelo: string, hormometro: number) {
    this.maquinas.push(new Maquinaria(codigo, descripcion, marca, modelo, hormometro));
    return false;

  }

}
