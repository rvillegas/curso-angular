import { Component, OnInit } from '@angular/core';
import { Maquinaria } from './../models/maquinaria.model';

@Component({
  selector: 'app-lista-maquinas',
  templateUrl: './lista-maquinas.component.html',
  styleUrls: ['./lista-maquinas.component.css']
})

export class ListaMaquinasComponent implements OnInit {
  maquinas: Maquinaria[];
  constructor() {
    this.maquinas = [];
    var maq:Maquinaria = new Maquinaria('RO-20','Excavadora de orugas','Caterpillar','320C',1230);
    this.maquinas.push(maq);
    var maq:Maquinaria = new Maquinaria('BO-35','Buldocer de orugas','Caterpillar','D9T',22345);
    this.maquinas.push(maq);   
    var maq:Maquinaria = new Maquinaria('TP-16','Pavimentadora','Vogele','1800-3',2200);
    this.maquinas.push(maq);
    var maq:Maquinaria = new Maquinaria('VD-400','Volqueta Doble Troque','DAF','CF85',7000);
    this.maquinas.push(maq); 
  }
  ngOnInit(): void {
  }

  guardar(codigo: string, descripcion: string, marca: string, modelo: string, hormometro: number) {
    this.maquinas.push(new Maquinaria(codigo, descripcion, marca, modelo, hormometro));
    return false;

  }

}
