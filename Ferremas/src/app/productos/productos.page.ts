import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../servicios/productos.service';
import { CarritoService } from '../servicios/carrito.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: false
})
export class ProductosPage implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService,private carritoService: CarritoService,private toastController: ToastController) {}
 
async agregarAlCarrito(producto: Producto) {
  this.carritoService.agregar(producto);

  const toast = await this.toastController.create({
    message: `${producto.nombre} agregado al carrito`,
    duration: 1500,
    position: 'bottom',
    color: 'success'
  });

  await toast.present();
}


  ngOnInit() {
    this.productosService.obtenerProductos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al obtener productos:', err)
    });
  }
}
