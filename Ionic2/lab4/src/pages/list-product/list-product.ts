import { Component } from '@angular/core';
import { Product } from '../model/product';
import { NavController } from 'ionic-angular';
import {ProductService} from "../../providers/product.service";
import { NavParams } from 'ionic-angular';

/*
  Generated class for the ListProduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html'
})
export class ListProductPage {

  products: Product[];

  constructor(public navCtrl: NavController,
              private productService: ProductService,
              public params: NavParams
  ) {}

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


  ngOnInit(): void {
    this.getProducts();
  }


  ionViewDidLoad() {
    console.log('Hello ListProductPage Page');
  }

}
