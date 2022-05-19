window.onload = function() {
    const valor1 = document.querySelector("#valor1");
    const valor2 = document.querySelector("#valor2");
    const resultado = document.querySelector("#result");

    valor2.addEventListener('blur', function() {
        resultado.value = Number(valor1.value) + Number(valor2.value);
    })
}