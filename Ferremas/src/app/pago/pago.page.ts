import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { AuthService } from '../servicios/auth.service';
import { UsuariosService } from '../servicios/usuarios.service';
import { Producto } from '../servicios/productos.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
  standalone: false
})
export class PagoPage implements OnInit {
  productos: Producto[] = [];
  total = 0;
  nombre = '';
  correo = '';
  direccion = '';
  sesionActiva = false;

  constructor(
    private carritoService: CarritoService,
    private auth: AuthService,
    private usuariosService: UsuariosService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.productos = this.carritoService.obtener();
    this.total = this.carritoService.totalCLP();

    this.sesionActiva = this.auth.isAuthenticated();

    if (this.sesionActiva) {
      const usuario = this.auth.obtenerUsuario();
      this.nombre = usuario?.nombre || '';
      this.correo = usuario?.correo || '';
      this.direccion = usuario?.direccion || '';
    }
  }

confirmarPago() {
  const montoRedondeado = Math.round(this.total); // o this.total | 0
  const ordenCompra = 'ORD' + Date.now(); // Código de pedido simulado

  this.http.post<any>('http://localhost:3000/api/webpay/crear-transaccion', {
  monto: montoRedondeado,
  ordenCompra
  }).subscribe({
    next: (res) => {
      // Redirige automáticamente a Webpay sandbox
      window.location.href = `${res.url}?token_ws=${res.token}`;
    },
    error: (err) => {
      console.error('Error al iniciar pago:', err);
    }
  });
}
}
