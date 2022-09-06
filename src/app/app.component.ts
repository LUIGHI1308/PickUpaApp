import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
  }


  usuarioComp = {
    nombre:'',
    email: '',
    password:''
  }

  
  public getemail(){
    return this.usuarioComp.email;
  }
  
}
