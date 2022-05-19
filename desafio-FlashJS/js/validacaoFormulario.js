// A função valida pode ser executada no evento submit do form, 
// passando como segundo parametro o event, 
// assim, dá o preventDefault também!

export const validaFormularios = (idForm, e) => {
    if(e) e.preventDefault()
    resetarErrors()

    let formIsValid = true

    let inputsNaPagina = document.querySelectorAll(`#${idForm} input`)
    inputsNaPagina.forEach(input => {
            if (!input.disabled && input.value == '') {

                let inputError = document.querySelector(`#${idForm} input[name="${input.name}"]`)
                let divMensagem
                
                if (idForm == 'formPedidos' && (input.name == 'codProduto' || input.name == 'quantidadeProduto')) {
                    divMensagem = document.querySelector(`#${idForm} .box-form-pedido`)
                } else {
                    divMensagem = document.querySelector(`#${idForm} input[name="${input.name}"]`)    
                }

                renderizaUmErro(inputError, divMensagem, `O campo <strong>${input.dataset.txt}</strong> precisa ser preenchido!`)
                formIsValid = false
            }
    })
    return formIsValid
}

export const renderizaUmErro = (inputError, divMensagem, msgError) => {
    let divErro = document.createElement('div')
    divErro.setAttribute('class', 'valida-erro')
    divErro.innerHTML = msgError
   
    divMensagem.insertAdjacentElement('afterend', divErro)
    
    inputError.classList.add('input-error')
    document.querySelectorAll('.input-error')[0].focus()
}

export const resetarErrors = () => {
    document.querySelectorAll('.valida-erro').forEach(element => element.remove())
    document.querySelectorAll('.input-error').forEach(element => element.classList.remove('input-error'))

}