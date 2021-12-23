import { Component, OnInit } from '@angular/core';

import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent implements OnInit {
  fecha: number = new Date().getFullYear();
  footer: any = {};
  loading: boolean;
  sociales: Array<any> = [
    {
      icono: 'assets/img/social/instagram.png',
      url: 'https://www.instagram.com/tallerdecortinas_/',
      titulo: 'Instagram',
    },
    {
      icono: 'assets/img/social/whatsApp.png',
      url: 'https://wa.me/56962230316',
      titulo: 'WhatsApp',
    },
  ];

  constructor(public _servicio: ServiciosService) {}

  ngOnInit() {
    this.loading = true;
    this._servicio.footer().subscribe((resp) => {
      this.footer = resp;
      this.loading = false;
    });
  }
}
