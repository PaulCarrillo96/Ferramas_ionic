import { Injectable } from '@angular/core';
import { Producto } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Producto[] = [];

  constructor() {
    const data = localStorage.getItem('carrito');
    if (data) this.carrito = JSON.parse(data);
  }

  agregar(producto: Producto): void {
    this.carrito.push(producto);
    this.guardar();
  }

  eliminar(index: number): void {
    this.carrito.splice(index, 1);
    this.guardar();
  }

  obtener(): Producto[] {
    return [...this.carrito];
  }

  limpiar(): void {
    this.carrito = [];
    this.guardar();
  }

totalCLP(): number {
  return this.carrito.reduce((acc, prod) => acc + Number(prod.precio), 0);
}


  private guardar(): void {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
}
