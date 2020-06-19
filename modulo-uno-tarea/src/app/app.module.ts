import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMaquinasComponent } from './lista-maquinas/lista-maquinas.component';
import { MaquinasComponent } from './maquinas/maquinas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMaquinasComponent,
    MaquinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
