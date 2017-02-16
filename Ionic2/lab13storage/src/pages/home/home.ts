import { Component } from '@angular/core';
import {Geolocation} from 'ionic-native';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private setDataCoords: any = {latitude: '', longitude: ''};
  data: any = {latitude: '', longitude: ''};

  constructor(public storage: Storage) {}

  ngOnInit() {
    Geolocation.getCurrentPosition().then(resp => {
      this.setDataCoords.latitude = resp.coords.latitude;
      this.setDataCoords.longitude = resp.coords.longitude;

      this.storage.set("coords", this.setDataCoords);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getInfo() {
    this.storage.get("coords").then(res => {
      console.log(res);
      this.data.latitude = res['latitude'];
      this.data.longitude = res['longitude']
    });
  }

}
