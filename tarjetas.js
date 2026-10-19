
function crearTarjetas() {
    // let divTarjetas = document.getElementById("divTarjetas");
    //divTarjetas.innerHTML= "<h1> MODIFICANDO DIV </h1>";
 

    let desde = document.getElementById("txtDesde");
        desdestr=desde.value;
        desdeEntero=parseInt(desdestr);

    let hasta = document.getElementById("txtHasta");
        hastastr=hasta.value;
        hastaEntero=parseInt(hastastr);

    let salto = document.getElementById("txtSalto");
        saltostr=salto.value;
        saltoEntero=parseInt(saltostr);


    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas");
    for (let i =desdeEntero; i<=hastaEntero; i+=saltoEntero){
        contenido =  contenido + "<div class='item'>" + i + "</div>";
        //console.log (contenido);
        divTarjetas.innerHTML=contenido

    }
}