import { Component,OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/product.html',
    providers: [ProductService]
})
export class AppComponent implements OnInit{

    constructor(private productService: ProductService){}

    title: string = "Mis productos";
    selected: Product;
    products: Product[];

    ngOnInit(){
        this.productService.getProducts()
            .then(products => this.products = products)
            .catch(error => console.log(error))
    }

    onSelect(product: Product) {
        this.selected = product;
    }
}


