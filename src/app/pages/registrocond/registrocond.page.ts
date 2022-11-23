import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-registrocond',
  templateUrl: './registrocond.page.html',
  styleUrls: ['./registrocond.page.scss'],
})
export class RegistrocondPage implements OnInit {
  


  constructor(private menuController: MenuController,private servicio:BackendService){

  }


  user = {
    name:'',
    email: '',
    password:'',
    rol:'Conductor'
  }

  ngOnInit() {}

    mostrarMenu(){
      this.menuController.open('first');
    }

    

  
    onSubmit(){
      console.log('submit');
      console.log(this.user)
      this.servicio.postUser(this.user)
    }
  

  

}
