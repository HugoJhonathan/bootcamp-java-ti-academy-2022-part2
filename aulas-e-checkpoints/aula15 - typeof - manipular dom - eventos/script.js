let m = '2.2';

if (typeof(m) === "number") {
    console.log(`O dado informado é um number!`);
} else {
    console.log(`O dado informado não é um number! Ele é: ${typeof m}`);
}

window.onload = function() {
    const botao = document.getElementById("btn");
    const txtBox = document.querySelector("#txtBox");
    const caixa = document.querySelector("#caixa");

    botao.addEventListener('click', function() {
        caixa.innerHTML += txtBox.value + "<br>";
    });
}