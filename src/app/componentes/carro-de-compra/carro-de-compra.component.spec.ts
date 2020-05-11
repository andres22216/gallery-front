import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroDeCompraComponent } from './carro-de-compra.component';

describe('CarroDeCompraComponent', () => {
  let component: CarroDeCompraComponent;
  let fixture: ComponentFixture<CarroDeCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroDeCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
