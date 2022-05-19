// Exercício 5

// 1. Crie um algorítimo que verifique se o valor de uma determinada variável
// é maior ou menor que o número 10.

// a) Se o valor da variável for maior que 10, imprimir no console: 
// 	”Valor maior que 10”

// b) Se for menor que 10, imprimir no console:
// 	”Valor menor que 10”  

let num = 9;

if (num > 10) {
    console.log(`${num} é maior que 10`);
} else if (num === 10) {
    console.log(`${num} é igual que 10`);
} else {
    console.log(`${num} é menor que 10`);
}