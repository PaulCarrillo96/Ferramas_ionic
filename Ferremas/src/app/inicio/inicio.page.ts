import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false // ✅ fuerza modo NgModule
})
export class InicioPage {
  categorias = [
    { nombre: 'Herramientas Eléctricas', icono: 'hammer', link: '/productos' },
    { nombre: 'Materiales de Construcción', icono: 'construct', link: '/productos' },
    { nombre: 'Seguridad y Protección', icono: 'shield-checkmark', link: '/productos' }
  ];

  constructor(private router: Router) {}

  irACatalogo() {
    this.router.navigate(['/productos']);
  }
}

