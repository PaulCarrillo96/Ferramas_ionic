import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  stock: number;
  imagen_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  agregarProducto(producto: Producto) {
  return this.http.post(`${this.apiUrl}`, producto);
}

editarProducto(id: number, producto: Producto) {
  return this.http.put(`${this.apiUrl}/${id}`, producto);
}

eliminarProducto(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`);
}
}
