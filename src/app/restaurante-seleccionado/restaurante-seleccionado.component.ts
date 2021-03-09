import { Component, OnInit, Input, Output } from '@angular/core';
import { Restaurantes } from '../mock-restaurantes';
import { Restaurante } from '../restaurante';

@Component({
  selector: 'app-restaurante-seleccionado',
  templateUrl: './restaurante-seleccionado.component.html',
  styleUrls: ['./restaurante-seleccionado.component.css']
})
export class RestauranteSeleccionadoComponent implements OnInit {

  @Input() restaurante!: Restaurante;

  formularioActivado: boolean = false;

  mostrarMensajeTexto: boolean = false;

  suficientesPlazas: boolean = false;

  constructor() { 
    
  }

  mostrarFormulario(){
    this.formularioActivado = true;
  }

//Funcionalidad extra que había incluido en botón, el botón no está visible a no ser que lo descomentes en html de este componente
  volverAlFormulario(): void{
    this.mostrarMensajeTexto = false;
    this.formularioActivado = true;
  }

  asignarValorFormularioActivado(valorFormularioActivadoHijo: boolean){
    console.log(valorFormularioActivadoHijo);
    this.formularioActivado = valorFormularioActivadoHijo;
  }

  ngOnInit(): void {
  }

}
