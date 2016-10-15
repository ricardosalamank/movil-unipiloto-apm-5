function Persona(primerNombre) {
    this.primerNombre = primerNombre;
}

Persona.prototype.diHola = function() {
    alert ('Hola, Soy ' + this.primerNombre);
};

var persona1 = new Persona("Alicia");
var persona2 = new Persona("Sebastian");

persona1.diHola();
persona2.diHola();