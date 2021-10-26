var Array = [];

function adicionar(){
    var musica = document.getElementById("musica").value;
    Array.push(musica);
    mostrar();
}


function mostrar(){
    document.getElementById("divMusicas").innerHTML+= Array[i] + "<br>"
    for(var i=0; i<Array.length; i++)

        document.getElementById("divMusicas").innerHTML+= Array[i] + "<br>"

}