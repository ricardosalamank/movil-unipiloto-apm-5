import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../model/product';
import {ProductService} from "../../providers/product.service";

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  products: Product[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private productService: ProductService) {

    this.getProducts();

  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
        },

        error => {
          console.log(error);
        }
      );
  }


}
