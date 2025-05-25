import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuariosService } from '../servicios/usuarios.service';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  correo = '';
  clave = '';
  mostrarClave = false;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private alertCtrl: AlertController,
    private authService: AuthService
  ) {}

  async login() {
    if (!this.correo || !this.clave) {
      const alerta = await this.alertCtrl.create({
        header: 'Atención',
        message: 'Debes completar todos los campos.',
        buttons: ['OK']
      });
      await alerta.present();
      return;
    }

    this.usuariosService.login(this.correo, this.clave).subscribe({
      next: async (res) => {
        this.authService.guardarSesion(res);
        const destino = res.rol === 'admin' ? '/admin' : '/inicio';
        this.router.navigate([destino]);
      },
      error: async (err) => {
        const alerta = await this.alertCtrl.create({
          header: 'Error',
          message: err.error?.error || 'Credenciales incorrectas.',
          buttons: ['OK']
        });
        await alerta.present();
      }
    });
  }
}
