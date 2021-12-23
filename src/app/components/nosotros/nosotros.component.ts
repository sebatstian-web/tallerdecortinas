import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styles: []
})
export class NosotrosComponent implements OnInit {
  trabajos: Array<any> = [
    'Cortinas clásicas',
    'Visillos',
    'Cenefas',
    'Store',
    'Etrsucas',
    'Terminales'
  ];

  constructor() { }

  ngOnInit() {
  }

}
