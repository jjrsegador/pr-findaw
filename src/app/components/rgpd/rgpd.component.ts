import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rgpd',
  templateUrl: './rgpd.component.html',
  styleUrls: ['./rgpd.component.css']
})


export class RgpdComponent implements OnInit {

  activoRGPD: boolean = true;

  constructor () {
  }

  ngOnInit():void {
  }

  pulsaRGPD() {
      if (this.activoRGPD) {
         this.activoRGPD = false;
      }
  }


}
