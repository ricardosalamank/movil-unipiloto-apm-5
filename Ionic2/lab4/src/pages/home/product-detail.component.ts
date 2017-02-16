import { Component,Input } from '@angular/core';

import { Product } from '../model/product';

@Component({
    selector: 'product-detail',
    templateUrl: 'templates/product-detail.html'
})

export class ProductDetailComponent {
    @Input()
    product: Product;
}
