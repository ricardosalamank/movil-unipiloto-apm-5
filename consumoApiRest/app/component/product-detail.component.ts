import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import {AppComponent} from './app.component'
import {ProductService} from "../service/product.service";

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html'
})

export class ProductDetailComponent {
    @Input()
    product: Product;

    constructor(private productService: ProductService, private appComponent : AppComponent){

    }

    save(product: Product): void {
        this.productService.update(this.product)
            .subscribe(
                response => {console.log(response)},
                err => { console.log(err)});
    }

    delete(product: Product): void {
        this.productService.deleteProduct(this.product)
            .subscribe(
                response => {console.log(response);this.appComponent.getProducts();},
                err => { console.log(err)});


    }
}

