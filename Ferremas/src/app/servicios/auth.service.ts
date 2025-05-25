import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario: any = null;

  constructor() {
    const sesion = localStorage.getItem('usuario');
    if (sesion) {
      this.usuario = JSON.parse(sesion);
    }
  }

  guardarSesion(datos: any): void {
    this.usuario = datos;
    localStorage.setItem('usuario', JSON.stringify(datos));
  }

  logout(): void {
    this.usuario = null;
    localStorage.removeItem('usuario');
  }

  isAuthenticated(): boolean {
    return this.usuario !== null;
  }

  getRol(): 'admin' | 'usuario' | null {
    return this.usuario?.rol || null;
  }

  getNombre(): string {
    return this.usuario?.nombre || '';
  }

  getId(): number | null {
    return this.usuario?.id || null;
  }

  isAdmin(): boolean {
    return this.getRol() === 'admin';
  }

  obtenerUsuario(): any {
  return this.usuario;
}

}
