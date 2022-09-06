import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Buscando Autos Disponibles...',
      duration: 3000,
      spinner:'crescent',
    });

    loading.present();
  }

  ngOnInit() {
  }

}
