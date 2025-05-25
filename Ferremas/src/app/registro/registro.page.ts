import { Component } from '@angular/core';
import { UsuariosService, Usuario } from '../servicios/usuarios.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage {
  usuario: Usuario = {
    nombre: '',
    correo: '',
    clave: '',
    rol: 'usuario'
  };

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async registrar() {
    this.usuariosService.registrar(this.usuario).subscribe({
      next: async () => {
        const alert = await this.alertCtrl.create({
          header: 'Registro Exitoso',
          message: 'Usuario creado correctamente',
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigate(['/login']);
      },
      error: async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'No se pudo registrar el usuario',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
