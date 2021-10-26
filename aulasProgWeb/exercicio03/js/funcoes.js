function somar(){
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);

    var soma = valor1 + valor2;

    document.getElementById("resultado1").value = soma;
}

function subtrair(){
    var valor3 = parseInt(document.getElementById("valor3").value);
    var valor4 = parseInt(document.getElementById("valor4").value);

    var subtracao = valor3 - valor4;

    document.getElementById("resultado2").value = subtracao;
}

function multiplicar(){
    var valor5 = parseInt(document.getElementById("valor5").value);
    var valor6 = parseInt(document.getElementById("valor6").value);

    var multiplicacao = valor5 * valor6;

    document.getElementById("resultado3").value = multiplicacao;
}

function dividir(){
    var valor7 = parseInt(document.getElementById("valor7").value);
    var valor8 = parseInt(document.getElementById("valor8").value);

    var divisao = valor7 / valor8;

    document.getElementById("resultado4").value = divisao;
}

