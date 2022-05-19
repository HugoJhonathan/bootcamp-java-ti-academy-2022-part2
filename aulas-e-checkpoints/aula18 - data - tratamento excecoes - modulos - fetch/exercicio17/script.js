window.onload = function() {

    const btn = document.querySelector("#btn");
    let veiculos = ['ônibus', 'motocicleta', 'patinete'];
    const tabela = document.querySelector("#tabela");

    btn.addEventListener("click", function() {

        tabela.innerHTML = "";
        let criarOl = document.createElement("ol");
        tabela.appendChild(criarOl);

        for (let valor of veiculos) {
            let criarLi = document.createElement("li");
            let Ol = document.querySelector("#tabela > ol");
            Ol.appendChild(criarLi).textContent = `${valor}`;
        }


    });
}