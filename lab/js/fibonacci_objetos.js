//clase serie de fibonacci
class fibo {
    constructor(num) {
        this.num = num;
        this.miArray = new Array();
    }

    get fibonacci () {

        var a = 0 , b = 1,f=1;

        for(var i = 2;i <= this.num;i++){
            f = a+b;
            a=b;
            b=f;
            this.miArray.push(f);
        }

        return this.miArray;
    }

};

(function() {

    //agrego metodo ami prototipo
    fibo.prototype.diHola = function() {
        return 'mi metodo agregado a mi prototipo';
    };

    miObjeto = new fibo(13);

    //agrego atributo a mi objeto existente
    miObjeto.nationality = "English";

   //imprimo mi metodo inicial
    console.log(miObjeto.fibonacci);
    alert(miObjeto.fibonacci);

    //imprimo atributo agregado a mi objeto
    console.log(miObjeto.nationality);
    alert(miObjeto.nationality);


    //imprimo mi metodo agregado con prototype
    console.log(miObjeto.diHola());
    alert(miObjeto.diHola());

})();

