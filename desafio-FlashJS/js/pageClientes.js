import { clientes } from '../database/clientes.js'
import { validaFormularios } from '../js/validacaoFormulario.js'
import { atualizarQuantidadeNoMenu } from '../js/layout.js'

atualizarQuantidadeNoMenu('clientes', clientes.length)

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
formCliente.addEventListener('submit', e => { if (validaFormularios('clientes', e)) salvarNovoUsuario()})

const criarNovoUsuario = () => {
    formularioModoCriacao()

    let hoje = new Date().toISOString().slice(0, 10)
    inputDataCadCliente.value = hoje

    let ultimoCodeCliente = clientes[clientes.length - 1].codCliente;
    inputCodCliente.value = ultimoCodeCliente + 1
}

const salvarNovoUsuario = () => {
    if (!criandoNovoCliente) return alert('Ops. Crie primeiro um novo Cliente!', 'error')
    
    let valor = {}
    campos.forEach(element => {
        if (element.name == 'codCliente') return valor[element.name] = Number(element.value)
        valor[element.name] = element.value
    })

    clientes.push(valor)

    clientesArow=0
    formularioModoExibicao()
    atualizarQuantidadeNoMenu('clientes', clientes.length)
    alert('Cliente cadastrado com sucesso!','success')
}

const nextOrPrevious = acao => {
    if (clientesArow >= clientes.length - 1 && acao === 'next') return alert('Este é o último registro!', 'info')
    if (clientesArow == 0 && acao === 'previous') return alert('Este é o primeiro registro!', 'info')
    
    document.querySelectorAll('#clientes .input-error').forEach(input => input.classList.remove('input-error'))
    document.querySelectorAll('#clientes .valida-erro').forEach(input => input.remove())

    acao === 'next' ? clientesArow++ : clientesArow--
    formularioModoExibicao()
}

const formularioModoCriacao = () =>{
    clientesArow = clientes.length
    criandoNovoCliente = true
    inputNomeCliente.value = ''
    inputNomeCliente.disabled = false
    inputNomeCliente.focus()
    btnSalvar.classList.add('valid')
    comportamentoDosBotoesAvancarEVoltar()
}

export const formularioModoExibicao = (inicio = clientesArow) => {
    campos.forEach(element => element.value = clientes[inicio][element.name])
    criandoNovoCliente = false
    inputNomeCliente.disabled = true
    btnSalvar.classList.remove('valid')
    comportamentoDosBotoesAvancarEVoltar()
}

const comportamentoDosBotoesAvancarEVoltar = () => {
    clientesArow == 0 ? btnVoltar.classList.add('invalid') : btnVoltar.classList.remove('invalid')
    clientesArow >= clientes.length - 1 ? btnAvancar.classList.add('invalid') : btnAvancar.classList.remove('invalid')
}