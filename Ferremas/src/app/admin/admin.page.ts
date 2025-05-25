import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: false // ✅ fuerza modo NgModusi siga
})
export class AdminPage implements OnInit {


constructor(private router: Router) {}

irA(ruta: string) {
  this.router.navigate([`/${ruta}`]);
}
  ngOnInit() {
  }

}
