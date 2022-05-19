// Exercício 14

// Crie uma função que receba um parâmetro que receba um valor entre 1 e 10 e efetue a tabuada. 

// a) A função deverá verificar se o parâmetro é um número
// b) A função deverá verificar se o parâmetro está entre 1 e 10 
// c) O resultado sairá no console 


function tabuada(num) {
    if (typeof num !== 'number') {
        console.log('Digite um valor numérico válido!');
    } else {
        if (num < 1 || num > 10) {
            console.log("Digite um valor entre 1 e 10!");
        } else {
            console.log(`Tabuada do ${num}`);
            for (let i = 0; i <= 10; i++) {
                console.log(`${num} x ${i} = ${num*i}`);
            }
        }
    }

}

tabuada(2);