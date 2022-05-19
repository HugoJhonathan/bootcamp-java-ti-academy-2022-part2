let str = `Qualquer conteudo`;

let str2 = `Outra string ${str}`;
console.log(str2);


// Array

const frutas = ["Uva", "Banana", "Laranja", "Melancia"];

let euGosto = `Eu gosto de ${frutas[0]}`;
console.log(euGosto);

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

const Pessoa = [
    "José",
    23,
    "Solteiro",
    "Bola",
    1.70,
    cores = ["azul", "preto", "vermelho"],
];


// (function(Pessoa) {

//     const jose = `Meu nome é ${Pessoa[0]}, eu tenho ${Pessoa[1]} anos e sou ${Pessoa[2]}. 
//     Eu também gosto de jogar ${Pessoa[3]} e tenho ${Pessoa[4]} mts`;
//     console.log(jose);
// })(Pessoa);

let key = 1;
console.log(Pessoa[5][key]);
console.log(Pessoa.length);