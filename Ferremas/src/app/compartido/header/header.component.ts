import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {

   constructor(public auth: AuthService, private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

    cerrarSesion() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit() {}

}
