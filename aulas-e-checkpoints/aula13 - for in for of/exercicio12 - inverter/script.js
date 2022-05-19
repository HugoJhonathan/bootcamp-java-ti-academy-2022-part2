// Exercício 12

// Crie uma função que receba uma palavra
// como parâmetro e inverta esta palavra

function inverter(nome, nomeInvertido = `${nome} invertido: `) {

    for (let p in nome) {
        nomeInvertido += nome[(nome.length - 1) - p];
    }
    console.log(nomeInvertido);

}

inverter('Hugo');