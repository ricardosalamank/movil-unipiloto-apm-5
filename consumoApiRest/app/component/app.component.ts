import { Component } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class AppComponent {
    title: string = "los productos del Año";

    selected: Product;

    products: Product[];

    constructor(private productService: ProductService) {

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

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product){
        this.selected = product;
    }

    add(name: string, type: string, quantity: number, price: number): void {
        name = name.trim();
        if (!name) { return; }
        this.productService.create(name,type,quantity,price)
            .subscribe(product => {
                this.products.push(product);
                this.selected = null;
            });
    }
}