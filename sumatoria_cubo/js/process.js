$("#output").focus(function() {
    if(this.value.trim() == 'Output format'){
        this.value = '';
    }
});

$("#input").focus(function() {
    if(this.value.trim()=='Input format'){
        this.value = '';
    }
});

$("#submit").click(function() {
    var input = $("#input").val();
    processData(input);

});


function processData(input) {
///DEFINES CONSTRAINS VARIABLES
    var t = parseInt(50);//max. testcases
    var n = parseInt(100);//max. matrix length
    var m = parseInt(1000);//max. de operaciones por cada testcase
    var w = Math.pow(10, 9);//max. valor para una coordenada de la matrix
    var TC_total;// total de testcase declared in the input
    var totalFinal = '';
    var count = 0;
    listaInput = normalizaInput (input);
    TC_List = armaListaTestCases(listaInput);
    TC_total = parseInt(TC_List.length);
    if(TC_total > t || TC_total < 1){
        console.log("El número de casos de prueba estaba fuera del intervalo.");//La cantidad de testcases ingresados supera el maximo permitido
        return false;
    }else{
        for(var x = 0; x < TC_total; x++){
            var matrix = crea3Dmatrix (n, parseInt(0));
            for(var i = 0; i < TC_List[x].length; i++){
                var thisOPList = TC_List[x][i].split(" ");
                if(thisOPList.length <= m && thisOPList.length > 1){//valida la cantidad de operaciones segun el rango permitido
                    switch(thisOPList[0].toUpperCase()){
                        case "QUERY":
                            var iniX = parseInt(thisOPList[1]);
                            var iniY = parseInt(thisOPList[2]);
                            var iniZ = parseInt(thisOPList[3]);
                            var finX = parseInt(thisOPList[4]);
                            var finY = parseInt(thisOPList[5]);
                            var finZ = parseInt(thisOPList[6]);
                            var total = sumaRangoMatrix (matrix, iniX,iniY,iniZ,finX,finY,finZ);
                            totalFinal = totalFinal+'|'+total;
                            count ++;
                            break;

                        case "UPDATE":
                            var iniX = parseInt(thisOPList[1]);
                            var iniY = parseInt(thisOPList[2]);
                            var iniZ = parseInt(thisOPList[3]);
                            var newVal = parseInt(thisOPList[4]);
                            if(newVal > -(w) && newVal <= w){//valida el valor de la coordenada según el rango permitido
                                matrix[iniX][iniY][iniZ][0] = newVal;
                            }else{
                                console.log("El número dado por el valor actualización se ha realizado fuera de rango.");//El valor proporcionado para esta coordenada es mayor o menor al permitido.
                                return false;
                            }
                            break;
                    }

                }else{
                    console.log("El número de operaciones estaba fuera del intervalo.");//La cantidad de operaciones proporcionados supera el maximo permitido
                    return false;
                }
            }
        }
    }
    totalFinal = totalFinal.substr(1);
    for(var i = 0; i < count; i++) {
        totalFinal = totalFinal.replace("|", "\n");
    }
    $("#output").val(totalFinal);
}

function sumaRangoMatrix (matrix, iniCoordX,iniCoordY,iniCoordZ, endCoordX, endCoordY, endCoordZ){
    var sumaTotal = parseInt(0);
    for (var x = iniCoordX; x <= endCoordX; x++) {
        for (var y = iniCoordY; y <= endCoordY; y++) {
            for(var z = iniCoordZ; z <= endCoordZ; z++){
                sumaTotal += parseInt(matrix[x][y][z][0]);
            }
        }
    }
    return sumaTotal;
}

function crea3Dmatrix (matrixMaxSize, defaultValue){
    var matrix = new Array();
    for (var i = 0; i <= matrixMaxSize; i++) {
        matrix[i] = new Array();
        for (var j = 0; j <= matrixMaxSize; j++) {
            matrix[i][j] = new Array();
            for(var x=0; x <= matrixMaxSize; x++){
                matrix[i][j][x] = new Array();
                matrix[i][j][x][0] = defaultValue;
            }
        }
    }
    return matrix;
}

function armaListaTestCases(listaInput){
    var TC_List = [];
    for(var a = 1; a < listaInput.length; a++){
        var thisMNArr = listaInput[a].split(" ");
        if(thisMNArr.length == 2){//pregunta si el la línea de los argumentos de un testcase (valores n y m).
            if(1 < thisMNArr[0] && thisMNArr[0] > 100 ){
                $("#output").val('Error el campo N No cumple con las caracteristicas requeridas 1 <= N <= 100');
                throw new Error("Error el campo N No cumple con las caracteristicas requeridas 1 <= N <= 100 ");
            }
            if(1 < thisMNArr[1] && thisMNArr[1] > 1000 ){
                $("#output").val('Error el campo M No cumple con las caracteristicas requeridas 1 <= M <= 1000');
                throw new Error("Error el campo M No cumple con las caracteristicas requeridas 1 <= M <= 1000 ");
            }
            var tempOpsArr = [];
            var cicloIni = parseInt(a+1);
            var cicloFin = (parseInt(a+1) + parseInt(thisMNArr[1]));
            for(var h=cicloIni; h < cicloFin; h++){
                tempOpsArr.push(listaInput[h]);
            }
            TC_List.push(tempOpsArr);
        }
    }

    return TC_List;
}

function normalizaInput (input){
    var match = /\r|\n/.exec(input);
    if (match) {
        var listaInput = input.split("\n");
        for(var e = 0; e < listaInput.length; e++){
            listaInput[e] = listaInput[e].replace(/\r/g, "");
        }
    }else{
        //No hay especificaciones con respecto a como manejar los fuera e parámetro
        console.log("La entrada dada tiene un formato diferente de lo esperado.");//El input proporcionado posee un formato diferente al esperado
        return false;
    }

    if(1 <= listaInput[0] && listaInput[0] <= 50 ){
        return listaInput;
    }else{
        $("#output").val('Error el campo T No cumple con las caracteristicas requeridas 1 <= t <= 50');
        throw new Error("Error el campo T No cumple con las caracteristicas requeridas 1 <= t <= 50 ");
    }

}

