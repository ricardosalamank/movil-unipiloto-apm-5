//funcion serie de fibonacci

(function() {
    console.log(fibonacci(13));
    alert(fibonacci(13));
})();



function fibonacci (n) {

    var a = 0 , b = 1,f=1;

    miArray = new Array();

    for(var i = 2;i <= n;i++){
        f = a+b;
        a=b;
        b=f;
        miArray[i] = f
    }

    return miArray;
}



