function adicionar (){

    var nome = document.getElementById("nome").Value;
    var sobrenome = document.getElementById("sobrenome").value;

    var usuario = [];

    usuario.push(nome);
    usuario.push(sobrenome);

    listaUsuarios.push(usuario);

    window.localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}