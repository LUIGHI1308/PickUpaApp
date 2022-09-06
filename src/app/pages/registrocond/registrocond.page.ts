import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-registrocond',
  templateUrl: './registrocond.page.html',
  styleUrls: ['./registrocond.page.scss'],
})
export class RegistrocondPage implements OnInit {
  user: any;

  constructor(public alertController: AlertController) { 
    this.user = {};
  }

  async ingresoCar(){
    const alert = await this.alertController.create({

      header:"Ingreso de Auto",
      inputs:[

        {
          name:'Marca',
          type:'text',
          id:'marca',
          placeholder:'Ingrese la marca del auto'
        },
        {
          name:'Color',
          type:'text',
          id:'Color',
          placeholder:'Ingrese el color del auto'
        },
        {
          name:'Modelo',
          type:'text',
          id:'modelo',
          placeholder:'Ingrese el modelo'
        },
        {
          name:'Year',
          type:'number',
          id:'year',
          placeholder:'Ingrese el año del Vehiculo'
        },
      ],
      buttons:[
        {
          text:'Aceptar',
          role:'Aceptar',
          handler:() => {
            console.log('Registro de Vehiculo exitoso!!');
          }         
        }
        ,{
          text:'Cancelar',
          role:'cancelar',
          handler:() => {
            console.log('Registro Cancelado');
          }         
        }
      ]
    })
    await alert.present();
  }

  

  ngOnInit() {
  }

}
