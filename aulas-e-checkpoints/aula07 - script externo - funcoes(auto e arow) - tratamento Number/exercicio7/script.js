//  1. Crie uma função que verifique qual é o maior número 
// entre dois parâmetros e tenha como saída uma impressão 
// no console.log informando o resultado.

function verificarMaiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`${numero1} é maior que o número ${numero2}`);
    } else if (numero1 == numero2) {
        console.log(`${numero1} é igual ao número ${numero2}`);
    } else {
        console.log(`${numero1} é menor que o número ${numero2}`);
    }

}

verificarMaiorNumero(2, 3);

function teste() {
    let nome = "Hugo";
    return nome;

}
console.log(teste());


let msg = (nome) => {
    return nome + ' Function!';
}
console.log(msg('Arrow'));

(function(produto, preco) {
    console.log("O produto é " + produto + " e o preço é R$ " + preco);
})("Biscoito", 2.2);

(() => {
    console.log("Arrow Function auto executável");
})();

let valor1 = prompt("Digite o valor 1:");
let valor2 = prompt("Digite o valor 2:");
const soma = (valor1, valor2) => {
    let resultado = Number(valor1) + Number(valor2);
    console.log("Resultado: " + resultado)
}
soma(valor1, valor2)