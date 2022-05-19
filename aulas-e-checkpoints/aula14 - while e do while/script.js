// while

// let loop = 0;
// let cores = ["verde", "amarelo"];

// while (loop < cores.length) {
//     console.log(cores[loop]);
//     loop++;
// }

let teste = 0;
do {
    teste = Number(prompt("Digite 0 para sair:"));
    switch (teste) {
        case 0:
            alert("Saindo do Sistema");
            break;
        case 1:
            alert("Cadastrando");
            break;
        case 2:
            alert("Consultando");
            break;
        default:
            alert("Opção inválida");
            break;
    }
} while (teste != 0)