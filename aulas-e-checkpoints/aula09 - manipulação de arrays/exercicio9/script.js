/*
1. Crie uma função que irá pedir “use o prompt”: a altura, o peso e o Nome. 
Esta função deverá calcular o índice de IMC (fórmula peso dividido pelo dobro 
da altura). 
A função deverá apresentar os resultados escrito em uma página HTML. Exemplo: 

Nome: Fulano
Altura: 1.80
Peso: 90
IMC: 27.80

*/

function valorImc(nome, altura, peso) {

    a = Number(altura);
    p = Number(peso);

    let imc = p / (a * 2);

    document.write("Nome..: ", nome, "<br>");
    document.write("Altura..: ", altura, "<br>");
    document.write("Peso..: ", peso, "<br>");
    document.write("IMC...: ", imc.toFixed(2));

}
pesoPessoa = prompt("Digite seu peso");
alturaPessoa = prompt("Digite sua altura");
nomePessoa = prompt("Digite seu nome");


valorImc(nomePessoa, alturaPessoa, pesoPessoa);