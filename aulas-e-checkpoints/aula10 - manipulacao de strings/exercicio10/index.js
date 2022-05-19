// Exercício 11

// 1. Criar um array de uma lista de nomes com o mínimo de 5 elementos;
// 2. Criar uma função que receberá: →3 parâmetros;
// um parâmetro será para enviar o array, o segundo parâmetros será para 
// enviar um novo nome para o array, que deverá ser inserido na lista de nomes.
// O terceiro parâmetro será enviado um número inteiro, que servirá de índice 
// para que seja impresso no console um determinado nome que está na lista do array.

//     A saída da função deverá ser:
//     Quantidade de elementos do array…: 6
//     Você escolheu o índice 2 que é o elemento Mariana
// A quantidade atual de elementos do array é de..: 7

let meuArray = ["João", "Paulo", "Maria", "Joaquim", "Pedro"];

function editarArray(meuArray, novoElemento, indice) {
    console.log(`Quantidade de elementos do array…: ${meuArray.length}`);
    console.log(`Você escolheu o índice ${indice} que é o elemento ${meuArray[indice]}`);
    console.log(`O nome ${novoElemento} foi inserido no array!`);
    meuArray.push(novoElemento);
    console.log(`A quantidade atual de elementos do array é de..: ${meuArray.length}`);
    console.log(`---------------------------------------------`)
}

editarArray(meuArray, "Hugo", 2);
editarArray(meuArray, "Jhonathan", 0);
editarArray(meuArray, "NDSASJIOSD", 5);