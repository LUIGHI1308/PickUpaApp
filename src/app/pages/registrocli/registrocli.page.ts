import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-registrocli',
  templateUrl: './registrocli.page.html',
  styleUrls: ['./registrocli.page.scss'],
})
export class RegistrocliPage implements OnInit {
  user: any;

  constructor(private menuController: MenuController){
    this.user = {};
  }

  ngOnInit() {}

    mostrarMenu(){
      this.menuController.open('first');
    }
  
    onSubmit(){
      console.log('submit');
      console.log(this.user);
    }
  

}

