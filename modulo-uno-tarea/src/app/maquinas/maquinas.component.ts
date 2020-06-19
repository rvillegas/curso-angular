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
@HostBinding('attr.class') cssClass='col-md-6';
  constructor() { }

  ngOnInit(): void {
  }

}
