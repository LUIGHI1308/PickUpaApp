import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interface';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-inputs',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
usuarios : Usuario

  constructor(private servicio:BackendService) { }

  ngOnInit() {
  }


  usuario = {
    nombre:'',
    email: '',
    password:'',
    rol:''
  }

  public getemail(){
    return this.usuario.email;
  } 

  public valCreado(){
      this.servicio.getforEmail(this.getemail())
      .subscribe(data =>{
        this.usuarios = data;
        console.log(data)
    });
  }

  onSubmit(){
    console.log('submit');
    this.valCreado()
  }
}

