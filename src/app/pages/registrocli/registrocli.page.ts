import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/interface';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-registrocli',
  templateUrl: './registrocli.page.html',
  styleUrls: ['./registrocli.page.scss'],
})
export class RegistrocliPage implements OnInit {
  



  constructor(private menuController: MenuController,private servicio:BackendService){

  }

  user = {
    name:'',
    email: '',
    password:'',
    rol:'Pasajero'
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

