import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteSeleccionadoComponent } from './restaurante-seleccionado/restaurante-seleccionado.component';
import { FormsModule } from '@angular/forms';
import { FormularioRestauranteComponent } from './formulario-restaurante/formulario-restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    RestauranteSeleccionadoComponent,
    FormularioRestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
