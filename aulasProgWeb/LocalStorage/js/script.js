var array = [];
function adicionar(){
    var musica = document.getElementById("musica").value;
    array.push(musica);
    mostrar();
    

}


function mostrar(){
    document.getElementById("divMusicas").innerHTML="";
    for(var i = 0; i < array.length; i++){

        document.getElementById("divMusicas").innerHTML += array[i] + "<br>";

    }
}


var listaUsuarios = [];

function adicionarUser(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;

    var usuario = [];
    usuario.push(nome);
    usuario.push(sobrenome);
    usuario.push(idade);
    usuario.push(email);

    listaUsuarios.push(usuario);

    window.localStorage.setItem("usuarios",JSON.stringify(listaUsuarios));
}