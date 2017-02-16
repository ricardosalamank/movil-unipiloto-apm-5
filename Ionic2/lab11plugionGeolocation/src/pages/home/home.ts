import { Component } from '@angular/core';
import { Geolocation, GoogleMapsEvent, GoogleMapsLatLng, GoogleMap } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // https://developers.google.com/maps/?hl=es-419.
  /*
   ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="el api key generado" --variable API_KEY_FOR_IOS="El api key generado"
   */
  public map;

  constructor(public navCtrl: NavController) {

  }

  myPosition():any{
    Geolocation.getCurrentPosition().then(res => {
      console.log(res.coords);
      let coords = [{
        'longitude' : res.coords.longitude,
        'latitude' : res.coords.latitude
      }];
      console.log(coords);
      this.loadMap(coords);
    });
  }

  loadMap(coords){
    console.log(coords);
    let longitud = coords[0]['longitude'];
    let latitude = coords[0]['latitude'];

    let location = new GoogleMapsLatLng(latitude,longitud);
    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true,
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'latLng': location,
        'tilt': 30,
        'zoom': 15,
        'bearing': 50
      }
    });
    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      console.log('Map is ready!');
    });
  }

  ngOnInit() {
    this.myPosition();
  }

}
