import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inputs',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  usuario = {
    nombre:'',
    email: '',
    password:''
  }

  public getemail(){
    return this.usuario.email;
  } 

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}

