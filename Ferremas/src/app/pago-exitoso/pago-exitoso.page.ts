import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pago-exitoso',
  templateUrl: './pago-exitoso.page.html',
  styleUrls: ['./pago-exitoso.page.scss'],
  standalone: false

})
export class PagoExitosoPage implements OnInit {

 constructor(
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carritoService.limpiar(); // Limpia el carrito al llegar aquí
  }

  volverInicio() {
    this.router.navigate(['/inicio']);
  }
}