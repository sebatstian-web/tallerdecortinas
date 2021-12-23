import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  menuOpciones: Array<any> = [
    { opcion: 'Inicio', url: '/inicio', icono: 'home' },
    { opcion: 'Quiénes somos', url: '/nosotros', icono: 'people' },
    { opcion: 'Contáctenos', url: '/contacto', icono: 'mail' },
  ];

  constructor(private _http: HttpClient) {}

  fotosInstagram() {
    let token = '';
    let url = `https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`;

    return this._http.get(url).pipe(
      map((resp: any) => {
        return resp.data;
      })
    );
  }

  enviarMail(mensaje: any) {
    const url: string = '';
    return this._http.post(url, mensaje);
  }

  footer() {
    const url: string = '';
    return this._http.get(url).pipe(map((resp: any) => resp.data));
  }
}
