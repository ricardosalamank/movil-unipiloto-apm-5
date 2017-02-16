import { Component } from '@angular/core';
import {Geolocation} from 'ionic-native';
import { NavController,Platform } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // npm install --save @types/googlemaps

  map: any;

  constructor(
    public navCtrl: NavController,
    private platform: Platform
  ) {}

  loadMap(){
    this.platform.ready().then(()=> {
      Geolocation.getCurrentPosition().then(position => {
        let myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        let mapElement = document.getElementById('map');
        this.map = new google.maps.Map(mapElement, {
          center: {lat: position.coords.latitude, lng: position.coords.longitude},
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoom: 19
        });

        let marker = new google.maps.Marker({
          position: myLatlng,
          title:"Aquí APM-5"
        });

        marker.setMap(this.map);

        google.maps.event.addListenerOnce(this.map, 'idle', () => {
          google.maps.event.trigger(mapElement, 'resize');
        });
      });
    });
  }

  ngOnInit() {
    this.loadMap();
  }

}
