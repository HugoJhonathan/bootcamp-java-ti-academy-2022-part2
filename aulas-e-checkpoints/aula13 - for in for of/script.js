// for (let x = 0; x <= 10; x++) {
//     console.log(`O valor da iteração é ${x}`);
// }


// let Pessoas = {
//     nome: "Steven Roger",
//     idade: 90,
//     heroi: 'Capitão América',
// }

// for (let prop in Pessoas) {
//     console.log(prop); // nome, idade, heroi
// }

// let frutas = ['Melancia', 'Manga', 'Banana', 'Uva'];

// for (let nomeFruta of frutas) {
//     console.log(nomeFruta);
// }

let Herois = [{
        identidadeSecreta: "Steven Roger",
        heroi: "Capitão América",
    },
    {
        identidadeSecreta: "Tony Stark",
        heroi: "Homem de Ferro",
    },
];

Herois.push({
    identidadeSecreta: "Diana",
    heroi: "Mulher Maravilha",
})


for (let i of Herois) { // retorna cada objeto inteiro


    for (let prop in i) { // navega entre as propiedades de cada
        console.log(i[prop]);
    }
}