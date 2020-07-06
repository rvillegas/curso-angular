import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMaquinasComponent } from './lista-maquinas/lista-maquinas.component';
import { MaquinasComponent } from './maquinas/maquinas.component';
import { DetalleEquipoComponent } from './detalle-equipo/detalle-equipo.component';
import { FormMaquinaComponent } from './form-maquina/form-maquina.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes =[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ListaMaquinasComponent},
  {path: 'detalle', component: DetalleEquipoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListaMaquinasComponent,
    MaquinasComponent,
    DetalleEquipoComponent,
    FormMaquinaComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
