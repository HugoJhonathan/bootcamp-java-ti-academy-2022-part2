// function Pessoa(nome) {
//     this.nome = nome;
// }
// Pessoa.prototype.msg = function() {
//     alert("Olá " + this.nome);
// }

// let NovaPessoa = new Pessoa("Jose");
// let OutraPessoa = new Pessoa("Maria");

// NovaPessoa.msg();
// OutraPessoa.msg();
// // console.log(NovaPessoa.nome);

// console.log(NovaPessoa);

// let Pessoa2 = {
//     'nome': '',
//     'idade': 22,
// }
// Pessoa2.__proto__.msg = function() {
//     alert("Olá " + this.nome);
// }
// let P = Pessoa2;
// P.nome = "Hugo";
// P.msg();

// console.log(P);


let Pessoa3 = [{
        'nome': 'Hugo',
        'idade': 22,
        'sexo': 'Masculino',
    }, {
        'nome': 'Maria',
        'idade': 25,
        'sexo': 'Feminino',
    },
    {
        'nome': 'João',
        'idade': 23,
        'sexo': 'Masculino',
    },
];

let NPessoa = Pessoa3;

console.log(`Existem ${NPessoa.length} cadastradas`);
console.log(NPessoa[2].nome);