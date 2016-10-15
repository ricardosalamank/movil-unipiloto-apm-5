'use strict';   //sentencia para utilizar js de modo estricta mejores practicas

var my_array: Array<number> = [1,2,3,4,5];

var other_array: Array<any> = ["array", 3, 5, 6, [1,2,3,4]]; //any nos permite cuanlquier tipo de dato

var tasks: Array<number> = [1,3,4,5];

function greeter(person: Array<string>){
    return person;
}

var user: Array<string> = ["1","32"];

console.log(greeter(user));

var a:string = 'a';