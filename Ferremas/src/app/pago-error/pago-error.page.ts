import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-error',
  templateUrl: './pago-error.page.html',
  styleUrls: ['./pago-error.page.scss'],
  standalone: false
})
export class PagoErrorPage {

  constructor(private router: Router) {}

  volverInicio() {
    this.router.navigate(['/inicio']);
  }

}
