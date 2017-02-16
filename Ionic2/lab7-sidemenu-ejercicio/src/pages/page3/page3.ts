import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import {ProductService} from "../../providers/product.service";

/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {

  users: User[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private productService: ProductService) {
    this.getUsers();
  }

  getUsers() {
    this.productService.getUsers()
      .subscribe(
        users => {
          this.users = users;
        },

        error => {
          console.log(error);
        }
      );
  }


}
