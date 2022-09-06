import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.page.html',
  styleUrls: ['./tarifa.page.scss'],
})
export class TarifaPage implements OnInit {
  constructor() {
   }

  ngOnInit() {
  }
  myVal: string = "";
  myVal1: Number = 0;
  tarifa: Number = 0;

  refresh()
  {    
  	this.myVal1 = +this.myVal*4;
    this.tarifa = this.myVal1;
  }

  
}
