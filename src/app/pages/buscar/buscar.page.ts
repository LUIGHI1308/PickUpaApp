import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
declare var google;

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  mapElement: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  origin = "DUOC UC sede maipú";
  destination = "Santos Dumont 311, Maipú";
  
  constructor(private loadingCtrl: LoadingController) { }
  map = null;


  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando Medios de pago',
      duration: 3000,
      spinner:'crescent',
    });

    loading.present();
  }


 
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map') as HTMLElement;
    const indicatorsEle: HTMLElement = document.getElementById('indicators');

    // create LatLng object
    const myLatLng = this.origin;
    // create map
    this.map = new google.maps.Map(mapEle, {
      mapId: "3691c69482db471e",
      center: myLatLng,
      zoom: 15
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
    });
  }

  private calculateRoute(){
    this.directionsService.route({
      origin : this.origin,
      destination : this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === google.maps.DirectionsStatus.OK){
        this.directionsDisplay.setDirections(response)
      }else{
        alert('No se pudo direccionar: ' + status);
      }
    });
  }

  ngOnInit() {
    this.loadMap();
  }

}

