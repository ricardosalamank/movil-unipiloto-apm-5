'use strict';   //sentencia para utilizar js de modo estricta mejores practicas
class Vehicle {
    wheel: number;
    fuel: string;
    private color: string;

    constructor(wheel: number, fuel: string, color: string = 'white'){
        this.color = color;
        this.fuel = fuel;
        this.wheel = wheel;
    }
}
//solo se puede hacer una herencia no multiple herencia en typrscript
class Car extends Vehicle {
    constructor(){
        super(4, 'gas', 'red');  //utiliza mi constructor padre
    }
}

class Motorcycle extends Vehicle {
    constructor(){
        super(2, 'gasoline');
    }
}

var car = new Car();
var motorcycle = new Motorcycle();

console.log(car);
console.log(motorcycle);