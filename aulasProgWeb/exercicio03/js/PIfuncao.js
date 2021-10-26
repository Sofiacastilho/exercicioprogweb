
function mostraNumeros(valorInicial){

    document.getElementById("divNumeros").innerHTML = "";
    var parada = parseInt(document.getElementById("parada").value);

    for (var i = valorInicial; i <= parada; i += 2){
        document.getElementById("divNumeros").innerHTML += i +"<br>"

        
    }
    
}
