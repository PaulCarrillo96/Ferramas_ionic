import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: false // ✅ fuerza modo NgModule
})
export class ContactoPage {
  formulario = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };

  constructor(private alertController: AlertController) {}

  async enviarFormulario() {
    const alert = await this.alertController.create({
      header: 'Enviado',
      message: 'Tu mensaje ha sido enviado correctamente.',
      buttons: ['OK']
    });

    await alert.present();

    // Limpiar formulario
    this.formulario = {
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: ''
    };
  }
}