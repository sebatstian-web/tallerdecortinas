import { Component, OnInit } from '@angular/core';

// import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [],
})
export class InicioComponent implements OnInit {
  fotosGaleria: Array<string> = [];
  // cargando: boolean;
  // pagina: number = 1;
  // items: number = 12;
  // total: number = 0;
  urlImg: string = '/assets/img/gallery';

  constructor() {} // private _servicio: ServiciosService

  ngOnInit() {
    // this.fotos();
    for (let i = 1; i <= 15; i++) {
      if (i < 10) {
        this.fotosGaleria.push(`${this.urlImg}/0${i}.jpg`);
      } else {
        this.fotosGaleria.push(`${this.urlImg}/${i}.jpg`);
      }
    }
  }

  // ngOnDestroy() {
  //   this._servicio.fotosInstagram().subscribe().unsubscribe();
  // }

  // fotos() {
  //   this.cargando = true;
  //   this._servicio.fotosInstagram().subscribe((resp) => {
  //     this.fotosGaleria = resp;
  //     this.total = this.fotosGaleria.length;
  //     this.cargando = false;
  //   });
  // }

  // indiceAbsoluto(index: number): number {
  //   return this.items * (this.pagina - 1) + index;
  // }

  // pageChanged(event: number) {
  //   this.pagina = event;
  //   // Volviendo al top al paginar
  //   window.scroll(0, 0);
  // }
}
