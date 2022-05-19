//precisa ser inteiro (não float) não negativo

let m = 1;

try { // faz as verificações e possíveis causas de error

    if (typeof m != 'number') throw new Error("Digite um número");
    if (m < 0) throw new Error("O número não pode ser negativo");
    if (m % 1 !== 0) throw new Error("Digite um número inteiro");

} catch (error) { // Mostra um dos erros que ocorrer em try
    console.log(`O erro é:.. ${error}`);
} finally { // Executa independende de dar erro ou não
    console.log("Cheguei no finally");
}