"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('../service/product.service');
var ProductList = (function () {
    function ProductList(productService) {
        this.productService = productService;
        this.title = "PRODUCT";
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .then(function (products) { return _this.products = products; })
            .catch(function (error) { return console.log(error); });
    };
    ProductList.prototype.onSelect = function (product) {
        this.selected = product;
    };
    ProductList = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/templates/product.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;
//# sourceMappingURL=product-list.component.js.map