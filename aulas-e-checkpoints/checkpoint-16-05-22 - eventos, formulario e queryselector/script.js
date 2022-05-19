
    let inc = 0
    let nomes = ['Marcelo', 'José', 'Maria', 'Pedro']

    console.log(nomes[inc])
    inc+=1
    console.log(nomes[inc])
    inc+=1
    console.log(nomes[inc])

    const txtNome = document.querySelector('#txtNome')
    const btnEnviar = document.querySelector('#btnEnviar')

    btnEnviar.addEventListener('click', function () {
        let url = 'http://' + txtNome.value
        window.open(url, '_blank')
    })


