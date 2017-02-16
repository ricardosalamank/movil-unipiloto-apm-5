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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productsURI = 'http://138.68.0.83:7070/api/v1/product/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productsURI + 'list')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.deleteProduct = function (product) {
        var url = this.productsURI + 'delete/' + product.id;
        return this.http.delete(url)
            .map(function () { return product; })
            .catch(this.handleError);
    };
    ProductService.prototype.update = function (product) {
        console.log(product.id);
        var url = this.productsURI + 'update/' + product.id;
        console.log(url);
        var toAdd = JSON.stringify(product);
        console.log(toAdd);
        return this.http
            .put(url, toAdd, { headers: this.headers })
            .map(function () { return product; })
            .catch(this.handleError);
    };
    ProductService.prototype.create = function (name, type, quantity, price) {
        var toAdd = { "name": name, "type": type, "quantity": quantity, "price": price };
        console.log(typeof toAdd);
        return this.http
            .post(this.productsURI + 'create', toAdd, { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Rx_1.Observable.throw(error.message || error);
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map