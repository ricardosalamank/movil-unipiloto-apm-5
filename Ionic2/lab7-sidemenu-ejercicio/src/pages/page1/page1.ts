import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page2 } from '../page2/page2';
import { Page3Page } from '../page3/page3';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {

  }

  loadProduct(){
    this.navCtrl.push(Page2);
  }

  loadUser(){
    this.navCtrl.push(Page3Page);
  }

}
