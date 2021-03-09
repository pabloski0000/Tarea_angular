import { Component, Input, OnInit, Output, EventEmitter, Host } from '@angular/core';
import { Restaurante } from '../restaurante';
import { RestauranteSeleccionadoComponent } from '../restaurante-seleccionado/restaurante-seleccionado.component';

@Component({
  selector: 'app-formulario-restaurante',
  templateUrl: './formulario-restaurante.component.html',
  styleUrls: ['./formulario-restaurante.component.css']
})

//En esta clase he utilizado tanto el @Output (que está comentado) como una forma diferente que sería con @Host, que es la
// que está implentada en este caso
export class FormularioRestauranteComponent implements OnInit {

  @Input() restaurante!: Restaurante;

  @Input() formularioActivado: boolean = false;

  @Input() mostrarMensajeTexto: boolean = false;

  @Input() suficientesPlazas: boolean = false;

  //@Output() desactivarFormulario = new EventEmitter<boolean>();

  constructor(
    /*Es una forma alternativa al @Output para modificar la propiedad del componente padre de una manera más limpia,
    que se requiere menos código*/
    @Host() private componentePadre: RestauranteSeleccionadoComponent
  ){}

  datosReserva = {
    nombre: '',
    telefono: null,
    fecha: '',
    hora: '',
    plazasAReservar: 0 
  }

  ngOnInit(): void {
  }

  botonVolver(): void{
    this.formularioActivado = false;
    this.mostrarMensajeTexto = false;
    //Actualizamos la propiedad this.formularioActivado del padre
    this.componentePadre.formularioActivado =  this.formularioActivado;
    //this.desactivarFormularioPadre();

    this.borrarDatosDelFormulario();
  }

  mostrarMensaje(): void{
    this.formularioActivado = false;
    this.mostrarMensajeTexto = true;

    //Operador ternario
    this.calcularPlazasRestantes() ? (this.suficientesPlazas = true) : (this.suficientesPlazas = false);
  }

  calcularPlazasRestantes(): boolean{
    let valorNumeroPlazasCambiado = false;
    if(this.datosReserva.plazasAReservar <= this.restaurante.numeroPlazas){
      this.restaurante.numeroPlazas -= this.datosReserva.plazasAReservar;
      valorNumeroPlazasCambiado = true;
    }

    return valorNumeroPlazasCambiado;
  }

  borrarDatosDelFormulario(): void{
    this.datosReserva = {
      nombre: '',
      telefono: null,
      fecha: '',
      hora: '',
      plazasAReservar: 0 
    }
  }

  //Método para el método @Output
  /*desactivarFormularioPadre(): void{
    this.desactivarFormulario.emit(this.formularioActivado);
  }*/

}
