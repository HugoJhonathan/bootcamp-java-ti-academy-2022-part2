const inputCodCliente = document.querySelector("#pedidos input[name='codCliente'")
const inputCodProduto = document.querySelector("#pedidos input[name='codProduto'")
const btnFecharJanela = document.querySelectorAll('.box-form .title span')
const janelas         = document.querySelectorAll('section.box-form')

const navLinks = document.querySelectorAll('nav ul a')

export const layout = () => {

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            let href = e.currentTarget.getAttribute("href")
            fecharTodasJanelas()
            mostrarUmaJanela(href)
            destacarMenu(e.currentTarget)

        })
    })

    btnFecharJanela.forEach(element => element.addEventListener('click', () => fecharTodasJanelas()))
}

const mostrarUmaJanela = id => {
    document.querySelector(id).classList.add('show')
    adicionarFocusNoInput(id)
}

const destacarMenu = element => element.classList.add('active')

const fecharTodasJanelas = () => {
    janelas.forEach(element => element.classList.remove('show'))
    removerDestaquesMenu()
}

const removerDestaquesMenu = () => document.querySelectorAll('nav .active').forEach(element => element.classList.remove('active'))

const adicionarFocusNoInput = id => {
    // Toda vem que mudar de página, verifica em todos os inputs, um por um, 
    // se este não for um input disabled e não tiver valor preenchido, dar um focus()
    // e interrompe o for
    let inputs = document.querySelectorAll(`${id} input`)

    for (let i = 0; i <= inputs.length - 1; i++) {
        if (!inputs[i].disabled && inputs[i].value == '') {
            inputs[i].focus()
            break
        }
    }
}