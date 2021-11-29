import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {


  /* Para manipulación de cambio de color de la opciones del menú cuando se sitúa el cursor*/
  cambiaBici:boolean;
  cambiaPatin:boolean;
  cambiaCont:boolean;


  constructor() {
  }

  ngOnInit():void {
    this.cambiaBici=false;
    this.cambiaPatin=false;
    this.cambiaCont=false;

  }

}
