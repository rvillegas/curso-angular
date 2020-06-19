import { Component, OnInit, HostBinding } from '@angular/core';
import {Maquinaria} from './../models/maquinaria.model'
import { Input } from '@angular/core';
@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.css']
})
export class MaquinasComponent implements OnInit {
@Input() maquina: Maquinaria;

  constructor() { }

  ngOnInit(): void {
  }

}
