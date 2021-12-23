import { Component, OnInit } from '@angular/core';

import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  ngOnInit() {
    // Iniciar JS de MaterializeCSS
    document.addEventListener('DOMContentLoaded', function() {
      M.AutoInit();
      const elems = document.querySelector('.slider');
      const instances = M.Slider.init(elems, {
        indicators: false,
        interval: 5000
      });
    });
  }

}
