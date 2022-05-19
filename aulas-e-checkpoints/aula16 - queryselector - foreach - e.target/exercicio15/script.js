window.onload = function() {
    const numTabInput = document.querySelector("#numTab");
    const resultado = document.querySelector("#resultado");
    const btnEnviar = document.querySelector("#btnEnviar");

    btnEnviar.addEventListener('click', function() {
        let numTab = Number(numTabInput.value);
        if (isNaN(numTab)) {
            resultado.innerHTML = 'Digite um valor numérico válido!';
        } else {
            if (numTab < 1 || numTab > 10) {
                resultado.innerHTML = "Digite um valor entre 1 e 10!";
            } else {

                resultado.innerHTML = (`Tabuada do ${numTab}<br>`);
                for (let i = 0; i <= 10; i++) {
                    resultado.innerHTML += `${numTab} x ${i} = ${numTab*i} <br>`;
                }
            }
        }

    });

}