import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Maquinaria } from '../models/maquinaria.model';


@Component({
  selector: 'app-form-maquina',
  templateUrl: './form-maquina.component.html',
  styleUrls: ['./form-maquina.component.css']
})


export class FormMaquinaComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Maquinaria>;
  fg: FormGroup;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      codigo: ['', Validators.compose([
        Validators.required,
        this.validarCodigo
      ])],
      nombre: ['',Validators.compose([
        Validators.required
      ])],
      marca: [''],
      modelo: [''],
      horometro: [0]
    });

  }

  ngOnInit(): void {
  }
  guardar(codigo: string, nombre: string, marca: string, modelo: string, horometro: number) {
    const m = new Maquinaria(codigo, nombre, marca, modelo, horometro);
    this.onItemAdded.emit(m);
    return false;
  }
  validarCodigo(control: FormControl): { [s: string]: boolean } {
    const regexpNumber = new RegExp('^[+ a-zA-Z]{2,3}\-[+ 0-9]{1,4}$');
    if (!regexpNumber.test(control.value)){
      console.log(regexpNumber.test(control.value));
      return {codigoInvalido: true};
    }
    return null;
  }


}
