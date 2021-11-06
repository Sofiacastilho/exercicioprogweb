function mensagem(){

    var campo = document.getElementById("campo").value;

    if (campo.value == null){
        alert("Há campo(s) em branco.")
    } else {
        alert("Dados gravados com sucesso!")
    }


}