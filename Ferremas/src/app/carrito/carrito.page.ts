import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { Producto } from '../servicios/productos.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  tipoCambio = 0;

  constructor(private carritoService: CarritoService,private alertCtrl: AlertController,private router: Router,private http: HttpClient) {}

  ngOnInit() {
    this.cargar();
    this.obtenerDolar();
  }

  cargar() {
  this.carrito = this.carritoService.obtener();
  this.total = this.carritoService.totalCLP();
  this.cantidad = this.carrito.length;
}

  obtenerDolar() {
    this.http.get<any>('http://localhost:3000/api/divisas/dolar').subscribe({
      next: res => this.tipoCambio = res.valor,
      error: err => console.error('Error al obtener dólar:', err)
    });
  }

  totalUSD(): number {
    return this.tipoCambio > 0 ? this.total / this.tipoCambio : 0;
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
