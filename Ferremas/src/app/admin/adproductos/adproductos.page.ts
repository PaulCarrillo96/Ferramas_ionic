import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../servicios/productos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adproductos',
  templateUrl: './adproductos.page.html',
  styleUrls: ['./adproductos.page.scss'],
  standalone: false
})
export class AdproductosPage implements OnInit {
  productos: Producto[] = [];
  modoEditar = false;
  productoActual: Producto = this.resetProducto();

  constructor(
    private productosService: ProductosService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }

  resetProducto(): Producto {
    return { id: 0, nombre: '', marca: '', precio: 0, stock: 0, imagen_url: '' };
  }

  seleccionarProducto(p: Producto) {
    this.productoActual = { ...p };
    this.modoEditar = true;
  }

  guardarProducto() {
    if (this.modoEditar) {
      this.productosService.editarProducto(this.productoActual.id, this.productoActual).subscribe(() => {
        this.modoEditar = false;
        this.productoActual = this.resetProducto();
        this.cargarProductos();
      });
    } else {
      this.productosService.agregarProducto(this.productoActual).subscribe(() => {
        this.productoActual = this.resetProducto();
        this.cargarProductos();
      });
    }
  }

  eliminarProducto(id: number) {
    this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Seguro que deseas eliminar este producto?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: () => {
            this.productosService.eliminarProducto(id).subscribe(() => {
              this.cargarProductos();
            });
          }
        }
      ]
    }).then(alert => alert.present());
  }
}
