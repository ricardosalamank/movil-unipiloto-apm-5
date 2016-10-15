'use strict'; //sentencia para utilizar js de modo estricta mejores practicas
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle(wheel, fuel, color) {
        if (color === void 0) { color = 'white'; }
        this.color = color;
        this.fuel = fuel;
        this.wheel = wheel;
    }
    return Vehicle;
}());
//solo se puede hacer una herencia no multiple herencia en typrscript
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        _super.call(this, 4, 'gas', 'red'); //utiliza mi constructor padre
    }
    return Car;
}(Vehicle));
var Motorcycle = (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        _super.call(this, 2, 'gasoline');
    }
    return Motorcycle;
}(Vehicle));
var car = new Car();
var motorcycle = new Motorcycle();
console.log(car);
console.log(motorcycle);
