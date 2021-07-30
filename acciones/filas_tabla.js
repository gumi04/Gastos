
var count =1;
var e;
$("#agregar-desglose").click(function (){
    $("#tbody-tabla-desglose").append(getFila())
    count ++;
})

function getFila(){
    let fila = '<tr>'+
    '<td>'+count+'</td>'+
    '<td><input class="form-control" placeholder="Nombre"></td>'+
    '<td><input type="number" class="form-control" placeholder="Cantidad"></td>'+
    '<td><input type="number" class="form-control" placeholder="P/U"></td>'+
    '<td><input type="number" class="form-control" placeholder="Total"></td>'+
    '<td><button class="btn btn-danger" onClick="deleteFila(this)">Eliminar</button></td>'+
    '</tr>';

    return fila;
    
}

function deleteFila(elemento){
    let nodeTR = elemento.parentElement.parentElement;
    let nodeTB = nodeTR.parentElement;
    nodeTB.removeChild(nodeTR)
    
}