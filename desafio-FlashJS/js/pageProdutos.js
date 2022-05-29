import { produtos } from '../database/produtos.js'
import { validaFormularios } from '../js/validacaoFormulario.js'
import { atualizarQuantidadeNoMenu } from '../js/layout.js'
import { moedaBrasileira } from './pagePedidos.js'

atualizarQuantidadeNoMenu('produtos', produtos.length)

const inputDescricao  = document.querySelector('input[name="descProduto"]')
const inputPreco      = document.querySelector('input[name="precoProduto"]')
const inputQuantidade = document.querySelector('input[name="qtdEstoqueProd"]')
const inputCodProduto = document.querySelector('input[name="codProduto"]')
const btnVoltar       = document.querySelector('#produtos .btnVoltar')
const btnAvancar      = document.querySelector('#produtos .btnAvancar')
const btnNovo         = document.querySelector('#produtos .btnNovo')
const btnSalvar       = document.querySelector('#produtos .btnSalvar')
const campos          = document.querySelectorAll("#produtos input")
const formProdutos    = document.querySelector("#produtos form")

let produtosArow = 0
let criandoNovoProduto = false

btnVoltar.addEventListener('click', () => nextOrPrevious('previous'))
btnAvancar.addEventListener('click', () => nextOrPrevious('next'))
btnNovo.addEventListener('click', () => criarNovoProduto())
formProdutos.addEventListener('submit', e => { if (validaFormularios('produtos', e)) salvarNovoProduto()})

const criarNovoProduto = () => {
    formularioModoCriacao()
        
    let ultimoCodeProduto = produtos[produtos.length - 1].codProduto;
    inputCodProduto.value = ultimoCodeProduto + 1
}

const salvarNovoProduto = () => {
        
    if (!criandoNovoProduto) return alert('Ops. Crie primeiro um novo Produto!', 'error')

    let valor = {}
    campos.forEach(element => {
        if (element.name == 'codProduto' || element.name == 'precoProduto' || element.name == 'qtdEstoqueProd'){
            return valor[element.name] = Number(element.value)
        }
        valor[element.name] = element.value
    })

    produtos.push(valor)
   
    produtosArow = 0
    formularioModoExibicao()
    atualizarQuantidadeNoMenu('produtos', produtos.length)
    alert('Produto cadastrado com sucesso!', 'success')
}

const nextOrPrevious = acao => {
    if (produtosArow >= produtos.length - 1 && acao === 'next') return alert('Este é o último registro!', 'info')
    if (produtosArow == 0 && acao === 'previous') return alert('Este é o primeiro registro!', 'info')
    
    document.querySelectorAll('#produtos .input-error').forEach(input => input.classList.remove('input-error'))
    document.querySelectorAll('#produtos .valida-erro').forEach(input => input.remove())
    
    acao === 'next' ? produtosArow++ : produtosArow--
    formularioModoExibicao()
}

const formularioModoCriacao = () => {
    produtosArow = produtos.length
    criandoNovoProduto = true
    inputDescricao.value = ''
    inputPreco.value = ''
    inputQuantidade.value = ''
    inputDescricao.disabled = false
    inputPreco.disabled = false
    inputQuantidade.disabled = false
    inputPreco.setAttribute('type','number')
    inputDescricao.focus()
    btnSalvar.classList.add('valid')
    comportamentoDosBotoesAvancarEVoltar()
}

export const formularioModoExibicao = (inicio = produtosArow) =>{
    criandoNovoProduto = false
    inputDescricao.disabled = true
    inputPreco.disabled = true
    inputPreco.setAttribute('type','text')
    inputQuantidade.disabled = true
    btnSalvar.classList.remove('valid')

    campos.forEach(element => {
        if(element.name == 'precoProduto'){
            return element.value = moedaBrasileira(produtos[inicio][element.name])
        }
        element.value = produtos[inicio][element.name]        
    })
    comportamentoDosBotoesAvancarEVoltar()
}

const comportamentoDosBotoesAvancarEVoltar = () =>{
    produtosArow == 0 ? btnVoltar.classList.add('invalid') : btnVoltar.classList.remove('invalid')
    produtosArow >= produtos.length-1 ? btnAvancar.classList.add('invalid') : btnAvancar.classList.remove('invalid')
}