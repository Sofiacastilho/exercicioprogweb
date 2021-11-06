var listaMusicas = [['Travis Scott', 'Goosebumps'], ['Post Malone', 'On the Road'],
 ['One Direction', '18'], ['Juice wrld', 'Call her Coraline'], 
['Chase Atlantic', 'ESCORT']];


window.onload = function(){
    criaTabela();
}

function criaTabela(){
    for(var i = 0; i < listaMusicas.length; i++){

        var conteudo = "";

        conteudo += '<div class="div-card">';
        
        conteudo += '<div class="div-informacoes">';
        
        conteudo += 'Artista: ' + listaMusicas[i][0] + "<p>" ;
        conteudo += 'Nome: ' + listaMusicas[i][1] +"<p>";  

        document.getElementById("divMusicas").innerHTML += conteudo
    }
}