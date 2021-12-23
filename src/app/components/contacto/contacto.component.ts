import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [],
})
export class ContactoComponent implements OnInit {
  formulario: FormGroup;
  enviando: boolean;
  envio: boolean;
  contactos: Array<any> = [
    {
      dato: '+56 9 6223 0316',
      url: 'https://wa.me/56962230316',
    },
    { dato: '+56 2 2850 7769', url: 'tel:+56228507769' },
    {
      dato: 'contacto@tallerdecortinas.cl',
      url: 'mailto:contacto@tallerdecortinas.cl',
    },
  ];

  constructor(private _servicio: ServiciosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      telefono: new FormControl('', Validators.required),
      consulta: new FormControl('', Validators.required),
      recaptcha: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {}

  enviar(formulario: any) {
    this.enviando = true;
    this.envio = false;
    this._servicio.enviarMail(formulario).subscribe(() => {
      this.enviando = false;
      this.envio = true;
      this.formulario.reset();
    });
  }
}
