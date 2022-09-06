import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {
  user: any;
  constructor(private loadingCtrl: LoadingController) {this.user = {}; }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Conectando con conductores cercanos...',
      duration: 3000,
      spinner:'crescent',
    });

    const loading2 = await this.loadingCtrl.create({
      message: 'Eres nuestra Prioridad ahora...',
      duration: 4000,
      spinner:'crescent',
    });

    loading.present();
    await this.delay(3000);
    loading2.present();
  }

  ngOnInit() {
  }

}
