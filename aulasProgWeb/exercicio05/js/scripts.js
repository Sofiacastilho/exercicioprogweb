
var listaProdutos = [];

function gravar (){
var prod = document.getElementById("produto").nodeValue;
listaProdutos.push(prod);

window.localStorage.setItem("produtos", JSON.stringify(listaProdutos));
}


function mudaPagina(){

    window.location.href

}
