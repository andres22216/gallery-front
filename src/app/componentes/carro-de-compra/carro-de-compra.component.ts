import { Component, OnInit } from '@angular/core';

export interface ProductosCarro {
  nombre: string;
  referencia: number;
  precio: number;
  cantidad: number;
  total: number;
}

const ELEMENT_DATA: ProductosCarro[] = [
  {nombre: 'Cuadro 1', referencia: 3526, precio: 100000, cantidad: 1, total: 100000},
  {nombre: 'Cuadro 2', referencia: 12547, precio: 250000, cantidad: 1, total: 250000},
  {nombre: 'Cuadro 3', referencia: 25555, precio: 320000, cantidad: 1, total: 320000},
  {nombre: 'Cuadro 4', referencia: 366654, precio: 258777, cantidad: 1, total: 258777},
  {nombre: 'Cuadro 5', referencia: 98754, precio: 1500000, cantidad: 1, total: 1500000},
  {nombre: 'Cuadro 6', referencia: 25417, precio: 2000000, cantidad: 1, total: 2000000},
];

@Component({
  selector: 'app-carro-de-compra',
  templateUrl: './carro-de-compra.component.html',
  styleUrls: ['./carro-de-compra.component.css']
})
export class CarroDeCompraComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'referencia', 'precio', 'cantidad', 'total'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
