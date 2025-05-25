import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  nombre: string;
  correo: string;
  clave: string;
  rol: 'usuario' | 'admin';
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  registrar(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }

  login(correo: string, clave: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/login`, { correo, clave });
}

}
