import { Component, OnInit } from '@angular/core';

import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  fotosSlider: Array<any> = [
    {
      img: 'assets/img/slider/01.jpg',
      clase: 'caption center-align',
      titulo: 'Dedicación',
      texto:
        'Experiencia y pasión es lo que deseamos entregar con nuestros trabajos.',
    },
    {
      img: 'assets/img/slider/02.jpg',
      clase: 'caption left-align',
      titulo: 'Calidad',
      texto: 'Buscamos los mejores materiales del mercado para usted.',
    },
    {
      img: 'assets/img/slider/03.jpg',
      clase: 'caption right-align',
      titulo: 'Compromiso',
      texto:
        'Cada día nos esforzamos por entregar productos de calidad al mejor precio.',
    },
  ];
  contactos: Array<any> = [
    {
      medio: 'contacto@tallerdecortinas.cl',
      url: 'mailto:contacto@tallerdecortinas.cl',
    },
    {
      medio: '+56 9 6223 0316',
      url: 'https://wa.me/56962230316',
    },
  ];

  constructor(public _servicio: ServiciosService) {}

  ngOnInit() {}
}
