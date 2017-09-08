/**
 *
 * Created by Charly on 25/08/2017.
 */
var vacio,initState = false,state = false;
init(4,4)

$("#iniciar").on('click',function (e) {
    if (!initState){

            initState=true;
        $("#iniciar").css({
            "background": "red",
            "border-color": "red"
        }).html("Detener App");
    }
    else {
        console.log("salir")
        window.location = window.location.href;
    }
});
