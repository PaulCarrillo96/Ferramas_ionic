import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { Producto } from '../servicios/productos.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: false
})
export class CarritoPage implements OnInit {
  carrito: Producto[] = [];
  total = 0;
  cantidad = 0;

  constructor(private carritoService: CarritoService,private alertCtrl: AlertController,private router: Router) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
  this.carrito = this.carritoService.obtener();
  this.total = this.carritoService.totalCLP();
  this.cantidad = this.carrito.length;
}

eliminar(index: number) {
  this.carritoService.eliminar(index);
  this.cargar(); // Refresca datos
}

irAlPago() {
  if (this.carritoService.obtener().length > 0) {
    this.router.navigate(['/pago']);
  }
}

async limpiar() {
  const alert = await this.alertCtrl.create({
    header: 'Confirmar',
    message: '¿Deseas vaciar el carrito?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Sí, vaciar',
        handler: () => {
          this.carritoService.limpiar();
          this.cargar();
        }
      }
    ]
  });

  await alert.present();
}



  ionViewWillEnter() {
  this.cargar();
}

}
