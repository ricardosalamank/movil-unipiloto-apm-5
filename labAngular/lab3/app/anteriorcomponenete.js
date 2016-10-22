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
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
/*
 @Component({
 selector: 'my-app',
 template: '<h1>{{product.id}}</h1><br />' +
 '<h2>{{product.name}}</h2><br />' +
 '<h2>{{product.description}}</h2><br />' +
 '<h2>{{product.type}}</h2><br />' +
 '<h2>{{product.price}}</h2><br />' +
 '<h2>{{product.quantity}}</h2><br />'+
 '<h2>{{user.id}}</h2><br />'+
 '<h2>{{user.address}}</h2><br />'+
 '<h2>{{user.phone}}</h2><br />'
 })
 */
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Mi producto";
        this.product = {
            id: 1,
            name: "Galax7 7",
            description: "Granada de mano",
            type: "smartphone",
            price: 500000,
            quantity: 10
        };
        this.user = {
            id: 1,
            address: "cll52",
            phone: 123456
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/product.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=anteriorcomponenete.js.map