import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bicicletas',
  templateUrl: './bicicletas.component.html',
  styleUrls: ['./bicicletas.component.css']
})
export class BicicletasComponent implements OnInit {

  sel_img1:boolean;
  sel_img3:boolean;
  sel_img4:boolean;
  sel_img5:boolean;
  sel_img6:boolean;
  sel_img7:boolean;
  sel_img8:boolean;
  sel_img10:boolean;

  constructor() {
    this.sel_img1=true;
    this.sel_img3=false;
    this.sel_img4=false;
    this.sel_img5=false;
    this.sel_img6=false;
    this.sel_img7=false;
    this.sel_img8=false;
    this.sel_img10=false;
   }

  ngOnInit(): void {
  }

  img1() {
     this.sel_img1=true;
     this.sel_img3=false;
     this.sel_img4=false;
     this.sel_img5=false;
     this.sel_img6=false;
     this.sel_img7=false;
     this.sel_img8=false;
     this.sel_img10=false;
  }
  img3() {
    this.sel_img1=false;
    this.sel_img3=true;
    this.sel_img4=false;
    this.sel_img5=false;
    this.sel_img6=false;
    this.sel_img7=false;
    this.sel_img8=false;
    this.sel_img10=false;
  }

  img4() {
    this.sel_img1=false;
    this.sel_img3=false;
    this.sel_img4=true;
    this.sel_img5=false;
    this.sel_img6=false;
    this.sel_img7=false;
    this.sel_img8=false;
    this.sel_img10=false;
  }

  img5() {
    this.sel_img1=false;
    this.sel_img3=false;
    this.sel_img4=false;
    this.sel_img5=true;
    this.sel_img6=false;
    this.sel_img7=false;
    this.sel_img8=false;
    this.sel_img10=false;
  }
  img6() {
    this.sel_img1=false;
    this.sel_img3=false;
    this.sel_img4=false;
    this.sel_img5=false;
    this.sel_img6=true;
    this.sel_img7=false;
    this.sel_img8=false;
    this.sel_img10=false;
  }
  img7() {
    this.sel_img1=false;
    this.sel_img3=false;
    this.sel_img4=false;
    this.sel_img5=false;
    this.sel_img6=false;
    this.sel_img7=true;
    this.sel_img8=false;
    this.sel_img10=false;
  }

  img8() {
    this.sel_img1=false;
    this.sel_img3=false;
    this.sel_img4=false;
    this.sel_img5=false;
    this.sel_img6=false;
    this.sel_img7=false;
    this.sel_img8=true;
    this.sel_img10=false;
  }

  img10() {
    this.sel_img1=false;
    this.sel_img3=false;
    this.sel_img4=false;
    this.sel_img5=false;
    this.sel_img6=false;
    this.sel_img7=false;
    this.sel_img8=false;
    this.sel_img10=true;
  }

}
