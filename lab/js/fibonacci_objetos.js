//funcion serie de fibonacci
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
            this.miArray[i] = f
        }

        return this.miArray;
    }

};


(function() {

    miObjeto = new fibo(13);

    console.log(miObjeto.fibonacci);
    alert(miObjeto.fibonacci);
})();

