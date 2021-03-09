import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteSeleccionadoComponent } from './restaurante-seleccionado.component';

describe('RestauranteSeleccionadoComponent', () => {
  let component: RestauranteSeleccionadoComponent;
  let fixture: ComponentFixture<RestauranteSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteSeleccionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
