// Exercício 11

// 1. Crie uma função que: 
// a) Conte quantos carácteres uma palavra possui
// b) Converta esta mesma palavra para MAIÚSCULA 
// c) Imprima somente a 3º letra desta palavra
// d) Troque esta mesma letra da palavra pela letra “X”

// Exemplo da saída da função: 
// Esta palavra tem 7 carácteres
// A palavra marcelo ficou MARCELO
// A letra R é o 3º carácter da palavra MARCELO
// MARCELO ficou MAXCELO 

function minhaFuncao(nome) {
    let nomeMaiusculo = nome.toUpperCase();

    console.log(`Esta palavra tem ${nome.length} carácteres`);
    console.log(`A palavra ${nome} ficou ${nomeMaiusculo}`);
    console.log(`A letra ${nomeMaiusculo[2]} é o 3º carácter da palavra ${nomeMaiusculo}`);
    console.log(`${nomeMaiusculo} ficou ${nomeMaiusculo.replace(nomeMaiusculo[2], 'X')}`);
    console.log(`----------------------------------------------------`)
}

minhaFuncao('Marcelo');
minhaFuncao('Hugo');
minhaFuncao('Jhonathan');