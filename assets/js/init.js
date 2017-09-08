/**
 * Created by Charly on 25/08/2017.
 */

function init(numf,numi) {
    var tabla = document.getElementById("marco");
    var aux =1;
    for(var x=0; x<numf ; x++){
        var nodeRen = document.createElement("div");
        nodeRen.className = "line";
        nodeRen.innerHTML = "";
        for (var y = 0; y<numi ; y++){
            var node = document.createElement("div");
            node.className = "item";
            node.id= 'n'+aux;
            node.activo=false;
            node.innerHTML = "";
            node.style.background='url(assets/img/'+aux+'.jpg)';
            node.style.backgroundSize  = 'cover';
            node.style.width = "100px";
            node.style.height = "130px";
            nodeRen.appendChild(node);
            aux++;
        }
        tabla.appendChild(nodeRen);
    }

    vacio = getVacio(Math.floor( Math.random() * ( 1 + (numf*numi)-1 )));





}


function getVacio(id) {
    if (id == 0){id+=1}
    var it = "n%id";
    var a = it.replace("%id",id);
    console.log(a)

    document.getElementById(a).style.background = "url(assets/img/0.jpg)";
    return id;
}