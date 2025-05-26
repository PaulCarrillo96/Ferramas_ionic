import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false // ✅ fuerza modo NgModule
})
export class InicioPage  {
  valorDolar = 0;
  categorias = [
    { nombre: 'Herramientas Eléctricas', icono: 'hammer', link: '/productos' },
    { nombre: 'Materiales de Construcción', icono: 'construct', link: '/productos' },
    { nombre: 'Seguridad y Protección', icono: 'shield-checkmark', link: '/productos' }
  ];

  constructor(private router: Router,private http: HttpClient) {}

  irACatalogo() {
    this.router.navigate(['/productos']);
  }

   ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/divisas/dolar').subscribe({
      next: res => this.valorDolar = res.valor,
      error: err => console.error('Error al obtener el valor del dólar', err)
    });
  }
}

