import { Component } from '@angular/core';
import {Geolocation} from 'ionic-native';
import { Dialogs } from 'ionic-native';
import { NavController,Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Network } from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  public network: string;
  public setData: any = {network: ''};

  constructor(public navCtrl: NavController,
              public storage: Storage,
              private platform: Platform) {}

  getInfo() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 5000
    };

    Geolocation.getCurrentPosition(options).then(position => {
      console.log(position.coords.latitude);
        Dialogs.alert('latitud:'+position.coords.latitude+' logitud'+position.coords.longitude, 'Alert!', 'Entendido');

    });

    Network.onConnect().subscribe(() => {
      this.network = Network.connection;
      this.setData.network = Network.connection;

    });

    this.network = Network.connection;
    this.setData.network = 'hola';
    console.log("networksetdata2",Network.connection);
    console.log("network2",Network.connection);
    this.storage.set("networksetdata3", this.setData);

  }

  ngOnInit() {

    this.platform.ready().then(()=> {

      let connectSubscription = Network.onConnect().subscribe(() => {
        this.network = Network.connection;
        this.setData.network = Network.connection;
        setTimeout(() => {
          if (Network.connection === 'wifi') {
            console.log('we got a wifi connection, woohoo!');
          }
        }, 3000);
      });

      console.log("networksetdata3",this.setData.network);
      console.log("network3",this.network);
      console.log(connectSubscription);
      this.storage.set("networkbutton3", this.setData);

    });

  }








}
