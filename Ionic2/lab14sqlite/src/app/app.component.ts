import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {ProductService} from '../providers/service';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = null;

  constructor(platform: Platform, public productService: ProductService) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.productService.openDatabase()
        .then(() => this.productService.createTable())
        .then(() => {
          this.rootPage = HomePage;
        })
    });
  }
}
