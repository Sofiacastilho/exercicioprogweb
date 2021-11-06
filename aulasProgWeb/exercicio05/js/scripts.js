
var listaProdutos = [];


function gravar (){
    var prod = document.getElementById("produto").value;
    listaProdutos.push(prod);

    window.localStorage.setItem("produtos", JSON.stringify(listaProdutos));
}


function mudaPagina(){

    window.location.href = "Paginas/pagina2.html";

}
