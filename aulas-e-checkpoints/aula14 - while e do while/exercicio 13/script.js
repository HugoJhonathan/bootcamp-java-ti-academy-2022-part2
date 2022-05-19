// Exercicio 13

// Crie um programa, por meio de uma função, que 
// receberá um objeto como parâmetro. Esta função deverá 
// ter como saída o nome das propriedades e seus respectivos 
// valores. O objeto irá conter uma relação de frutas e seus preços.

let frutas = [{
        nome: "Melancia",
        preco: 10,

    },
    {
        nome: "Laranja",
        preco: 2,

    },
    {
        nome: "Goiaba",
        preco: 1,

    },
    {
        nome: "Melão",
        preco: 2,

    },
];

function listarFrutas(frutas) {
    let total = 0;
    for (let i of frutas) {
        for (let prop in i) {

            console.log(`${prop}: ${i[prop].toLocaleString('pt-br', {style:'currency', currency:'BRL'})}`);
        }
        total += i['preco'];
    }
    console.log('----------');
    console.log(`TOTAL: ${total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
}

listarFrutas(frutas);