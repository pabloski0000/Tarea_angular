import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';
import { Restaurantes } from '../mock-restaurantes';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  restaurantes = Restaurantes;

  restauranteSeleccionado!: Restaurante;

  constructor() { }

  mostrarElemento(restaurante: Restaurante){
    this.restauranteSeleccionado = restaurante;
  }

  ngOnInit(): void {
  }

}
