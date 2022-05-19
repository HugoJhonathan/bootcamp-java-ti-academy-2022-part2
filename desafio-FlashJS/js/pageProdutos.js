import { produtos } from '../database/produtos.js'
import { validaFormularios } from '../js/validacaoFormulario.js'

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
formProdutos.addEventListener('submit', e => {
    if (validaFormularios('produtos', e)) salvarNovoProduto()
})

const criarNovoProduto = () => {
    produtosArow++
   
    inputDescricao.value = ''
    inputPreco.value = ''
    inputQuantidade.value = ''
    inputDescricao.disabled = false
    inputPreco.disabled = false
    inputQuantidade.disabled = false
    inputDescricao.focus()
    
    let ultimoCodeProduto = produtos[produtos.length - 1].codProduto;
    inputCodProduto.value = ultimoCodeProduto + 1
    btnSalvar.classList.add('valid')
    criandoNovoProduto = true
}

const salvarNovoProduto = () => {
        
    if (!criandoNovoProduto) return alert('error','Ops. Crie primeiro um novo Produto!')

    let valor = {}
    campos.forEach(element => {
        if (element.name == 'codProduto' || element.name == 'precoProduto' || element.name == 'qtdEstoqueProd'){
            return valor[element.name] = Number(element.value)
        }
        valor[element.name] = element.value
    })

    produtos.push(valor)

    produtosArow = 0
    criandoNovoProduto = false
   
    inputQuantidade.disabled = true
    inputDescricao.disabled = true
    inputPreco.disabled = true
    alert('success','Produto cadastrado com sucesso!')
    preencherFormularioProdutos(produtosArow)
    btnSalvar.classList.remove('valid')
}

export const preencherFormularioProdutos = inicio => {
    document.querySelector('#produtos h1').textContent = `Produtos (${produtos.length})`
    campos.forEach(element => element.value = produtos[inicio][element.name])

    produtosArow == 0 ? btnVoltar.classList.add('invalid') : btnVoltar.classList.remove('invalid')
    produtosArow == produtos.length-1 ? btnAvancar.classList.add('invalid') : btnAvancar.classList.remove('invalid')
}

const nextOrPrevious = acao => {
    if(criandoNovoProduto){  // caso estivesse criando um novo, e apertasse em alguma seta
        criandoNovoProduto = false
        inputDescricao.disabled = true
        inputPreco.disabled = true
        inputQuantidade.disabled = true
    }
    btnSalvar.classList.remove('valid')
    document.querySelectorAll('#produtos .input-error').forEach(input => input.classList.remove('input-error'))
    document.querySelectorAll('#produtos .valida-erro').forEach(input => input.remove())
    
    if (produtosArow >= produtos.length - 1 && acao === 'next') return alert('info','Este é o último registro!')
    if (produtosArow == 0 && acao === 'previous') return alert('info','Este é o primeiro registro!')

    acao === 'next' ? produtosArow++ : produtosArow--
    preencherFormularioProdutos(produtosArow)
}