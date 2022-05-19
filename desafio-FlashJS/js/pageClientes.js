import { clientes } from '../database/clientes.js'
import { validaFormularios } from '../js/validacaoFormulario.js'

const inputDataCadCliente = document.querySelector('input[name="dataCadCli"]')
const inputNomeCliente    = document.querySelector('input[name="nomeCliente"]')
const inputCodCliente     = document.querySelector('input[name="codCliente"]')
const btnAvancar          = document.querySelector('#clientes .btnAvancar')
const btnSalvar           = document.querySelector('#clientes .btnSalvar')
const btnVoltar           = document.querySelector('#clientes .btnVoltar')
const btnNovo             = document.querySelector('#clientes .btnNovo')
const campos              = document.querySelectorAll('#clientes input')
const formCliente         = document.querySelector('#clientes form')

let clientesArow = 0
let criandoNovoCliente = false

btnNovo.addEventListener('click', () => criarNovoUsuario())
btnVoltar.addEventListener('click', () => nextOrPrevious('previous'))
btnAvancar.addEventListener('click', () => nextOrPrevious('next'))
formCliente.addEventListener('submit', e => {
    if (validaFormularios('clientes', e)) salvarNovoUsuario()
})

const criarNovoUsuario = () => {
    clientesArow++
    criandoNovoCliente = true
    inputNomeCliente.value = ''
    inputNomeCliente.disabled = false
    inputNomeCliente.focus()

    let hoje = new Date().toISOString().slice(0, 10)
    inputDataCadCliente.value = hoje

    let ultimoCodeCliente = clientes[clientes.length - 1].codCliente;
    inputCodCliente.value = ultimoCodeCliente + 1
    btnSalvar.classList.add('valid')
}

const salvarNovoUsuario = () => {
    if (!criandoNovoCliente) return alert('error', 'Ops. Crie primeiro um novo Cliente!')
    
    let valor = {}
    campos.forEach(element => {
        if (element.name == 'codCliente') return valor[element.name] = Number(element.value)
        valor[element.name] = element.value
    })

    clientes.push(valor)
    clientesArow = 0
    criandoNovoCliente = false
    inputNomeCliente.disabled = true
    alert('success', 'Cliente cadastrado com sucesso!')
    preencherFormularioClientes(clientesArow)
    btnSalvar.classList.remove('valid')
}

export const preencherFormularioClientes = inicio => {
    document.querySelector('#clientes h1').textContent = `Clientes (${clientes.length})`
    campos.forEach(element => element.value = clientes[inicio][element.name])
    clientesArow == 0 ? btnVoltar.classList.add('invalid') : btnVoltar.classList.remove('invalid')
    clientesArow == clientes.length - 1 ? btnAvancar.classList.add('invalid') : btnAvancar.classList.remove('invalid')
}

const nextOrPrevious = acao => {
    if(criandoNovoCliente){ // caso estivesse criando um novo, e apertasse em alguma seta
        criandoNovoCliente = false
        inputNomeCliente.disabled = true
    }
    btnSalvar.classList.remove('valid')
    document.querySelectorAll('#clientes .input-error').forEach(input => input.classList.remove('input-error'))
    document.querySelectorAll('#clientes .valida-erro').forEach(input => input.remove())

    if (clientesArow >= clientes.length - 1 && acao === 'next') return alert('info', 'Este é o último registro!')
    if (clientesArow == 0 && acao === 'previous') return alert('info', 'Este é o primeiro registro!')

    acao === 'next' ? clientesArow++ : clientesArow--

    preencherFormularioClientes(clientesArow)
}