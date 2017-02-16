/**
 * Created by Ricardo on 13/11/2016.
 */

var mock =[
                {
                    "id": 1,
                    "title": "AGOTADO CHALECO DOBLE FAZ BOGOTÁ HUMANA/CLARA ALCALDESA",
                    "content": "Ni un solo ejemplar del chaleco doble faz “Bogotá Humana-Clara alcaldesa” quedaba esta mañana en las dependencias distritales. La prenda, marca Polo, desde luego, ha sido muy apetecida por los funcionarios de la Bogotá Humana por lo práctica que les resulta.",
                    "image": "http://lorempixel.com/300/300"
                },
                {
                    "id": 2,
                    "title": "Falcao pide no ir sentado en el bus de la selección",
                    "content": "Una novedad inesperada trajo el nuevo bus de la selección Colombia que será estrenado por el equipo de Pekerman la próxima semana cuando este se reúna para enfrentar a Perú en Barranquilla por la primera fecha de las eliminatorias a Rusia 2018.",
                    "image": "http://lorempixel.com/300/300"
                },
                {
                    "id": 3,
                    "title": "El Papa y el Che fueron al mismo preescolar",
                    "content": "Aimar, Bergoglio, Cáceres, D’Alessio, Enriquez, Fontanini, Guevara, Hammet…” No es la alineación de un equipo de fútbol argentino. Es la lista de párvulos encontrada en el archivo de la escuela Héroes del Mañana en San Isidro, Provincia de Buenos Aires, Argentina, que encontró hace menos de un mes Horacio Maidana, biógrafo argentino de Jorge Mario Bergoglio, al seguir los pequeños pasos de la infancia del Sumo Pontífice.",
                    "image": "http://lorempixel.com/300/300"
                },
                {
                    "id": 4,
                    "title": "“NADA DE ECLIPSE, ATENTADO DE LA FAR DEJÓ SIN LUZ A LA LUNA”, DENUNCIA URIBE",
                    "content": "Iracundo y desencajado, el expresidente Álvaro Uribe denunció hoy en rueda de prensa que la sombra que cubrió a la luna el pasado domingo en la noche fue un corte masivo de luz consecuencia de un atentado del frente “Compañera Laika” de las Farc.",
                    "image": "http://lorempixel.com/300/300"
                }
            ];



$(document).on('ready',function(){


    $('body,nav').hide();

    $('body,nav').slideToggle(2000,'easeOutBounce');

    $(".body").slideToggle('2000', "easeOutBounce", function () {
    });

    $("#menu").click(function(){

        var clase = $('#table').attr('class');

        console.log(clase);

        if(clase == 'items'){
            $("#table").addClass("evento");
        }else{
            $("#table").removeClass("evento");
        }


    });

    $("#down0").click(function(event) {
        if( $('#tritem0').is(":visible") ){
            $(".item0").slideToggle(1000,function() {
                $("#tritem0").hide();
                $('#td0').remove();
            });
        }else{
            $("#tritem0").show();
            $(".item0").slideToggle(1000);
            var valor = $("#1").text();
            $('#table-nav td:last').after('<td id="td0">'+valor+'</td>');
        }
    });

    $("#down1").click(function(event) {
        if( $('#tritem1').is(":visible") ){
            $(".item1").slideToggle(1000,function() {
                $("#tritem1").hide();
                $('#td1').remove();
            });
        }else{
            $("#tritem1").show();
            $(".item1").slideToggle(1000);
            var valor = $("#2").text();
            $('#table-nav td:last').after('<td id="td1">'+valor+'</td>');
        }
    });

    $("#down2").click(function(event) {
        if( $('#tritem2').is(":visible") ){
            $(".item2").slideToggle(1000,function() {
                $("#tritem2").hide();
                $('#td2').remove();
            });
        }else{
            $("#tritem2").show();
            $(".item2").slideToggle(1000);
            var valor = $("#3").text();
            $('#table-nav td:last').after('<td id="td2">'+valor+'</td>');
        }
    });

    $("#down3").click(function(event) {
        if( $('#tritem3').is(":visible") ){
            $(".item3").slideToggle(1000,function() {
                $("#tritem3").hide();
                $('#td3').remove();
            });
        }else{
            $("#tritem3").show();
            $(".item3").slideToggle(1000);
            var valor = $("#4").text();
            $('#table-nav td:last').after('<td id="td3">'+valor+'</td>');
        }
    });

});

var boton = 'boton';

for(var a = 0; a < mock.length; a++){

    $('#table tr:last').after(
        '<tr class="tritems"><td> <a id="down'+a+'" class="'+boton+'"></a></td><td><label id = "'+mock[a].id+'">'+mock[a].id+'.'+mock[a].title+'</label></td> </tr>' +
        '<tr id="tritem'+a+'" style="display: none;"><td><div class="item'+a+'" style=" display: none; "><img src="'+mock[a].image+'"></div></td>' +
        '<td><div class="item'+a+'" style=" display: none; "><label>'+mock[a].content+'</label></div></td></tr>');

    if(boton == 'boton'){
        boton = 'boton2';
    }else{
        boton = 'boton';
    }

}


