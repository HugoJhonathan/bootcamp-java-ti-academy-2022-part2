import { clientes } from '../database/clientes.js'
import { produtos } from '../database/produtos.js'
import { validaFormularios, renderizaUmErro } from '../js/validacaoFormulario.js'
import { formularioModoExibicao as formularioModoExibicaoProdutos } from '../js/pageProdutos.js'
import { atualizarQuantidadeNoMenu } from '../js/layout.js'

const inputIdCliente    = document.querySelector('#pedidos input[name="codCliente"]')
const inputNomeCliente  = document.querySelector('#pedidos input[name="nomeCliente"]')
const inputCodProduto   = document.querySelector('#pedidos input[name="codProduto"]')
const inputDescProduto  = document.querySelector('.box-form-pedido input[name="descProduto"]')
const inputPrecoProduto = document.querySelector('.box-form-pedido input[name="precoProduto"]')
const inputQuantidade   = document.querySelector('#pedidos input[name="quantidadeProduto"]')
const campos            = document.querySelectorAll('#formPedidos input')
const tabela            = document.querySelector('.table-pedido tbody')
const divTotal          = document.querySelector("#total span")
const boxFormPedido     = document.querySelector('.box-form-pedido')
const btnSalvarPedido   = document.querySelector('#salvarPedido')

let pedidos = []
let pedidosRealizados = []

document.querySelector('#formPedidos').addEventListener('submit', e => {
    if (validaFormularios('formPedidos', e)) salvarPedido()
})

inputIdCliente.addEventListener('keyup', e => procurarNomeCliente(e))
inputIdCliente.addEventListener('change', e => procurarNomeCliente(e))
inputCodProduto.addEventListener('keyup', e => procurarProduto(e))
inputCodProduto.addEventListener('change', e => procurarProduto(e))
btnSalvarPedido.addEventListener('click', () => finalizarPedido())

atualizarQuantidadeNoMenu('pedidos', pedidos.length)

const procurarNomeCliente = e => {
    let nome = clientes.find(cliente => cliente.codCliente == e.target.value)
    inputNomeCliente.value = nome !== undefined ? nome.nomeCliente : ''
}

const procurarProduto = e => {
    let produto = produtos.find(produto => produto.codProduto == e.target.value)
    inputDescProduto.value = produto !== undefined ? produto.descProduto : ''
    inputPrecoProduto.value = produto !== undefined ? produto.precoProduto : ''
}

const salvarPedido = () => {

    let item = {}
    campos.forEach(element => {
        if (element.name) {
            item[element.name] = element.value
        }
    })

    // VALIDAÇÕES
    let clienteExiste = clientes.find(cliente => cliente.codCliente == item.codCliente)
    if (!clienteExiste) return renderizaUmErro(inputIdCliente, inputIdCliente, `Este código de Cliente não existe!`)

    let produtoExiste = produtos.find(produto => produto.codProduto == item.codProduto)
    if (!produtoExiste) return renderizaUmErro(inputCodProduto, boxFormPedido, `Este código de Produto não existe!`)

    let itemJaAdicionado = pedidos.find(pedido => pedido.codProduto == item.codProduto)

    if (itemJaAdicionado) {
        renderizaUmErro(inputCodProduto, boxFormPedido, `${item.descProduto} já está no pedido!`)
        return marcarUmItemNaTabela(item)
    }
    
    if (verificarEstoque(item) < item.quantidadeProduto) {
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return alert('Não há esta quantidade em estoque!<br> Estoque disponível: ' + verificarEstoque(item), 'error')
    }
    // FIM VALIDAÇÕES

    pedidos.push(item)

    mudarEstoque('diminuir', item.codProduto, item.quantidadeProduto)
    renderizaItens()
    inputCodProduto.focus()
}

const mudarEstoque = (operacao, idProduto, valor) => {
    if(operacao == 'diminuir'){
        produtos.forEach(item => {
            if(item.codProduto == idProduto) item.qtdEstoqueProd -= Number(valor)
        })    
    }else if(operacao == 'aumentar'){
        produtos.forEach(item => {
            if(item.codProduto == idProduto) item.qtdEstoqueProd += Number(valor)
        }) 
    }
    formularioModoExibicaoProdutos()
}

const verificarEstoque = item => {
    let qtd = 0
    produtos.forEach(element => {
        if (element.codProduto == item.codProduto) {
            qtd = element.qtdEstoqueProd
        }
    })
    return qtd
}

const criaTr = (tabela, itens, id) => {
    let tr = document.createElement('tr')
    itens.forEach(item => {
        let td = document.createElement('td')
        td.textContent = item
        tr.appendChild(td)
    })
    let tdDelete = document.createElement('td')
    tdDelete.textContent = 'delete'
    tdDelete.setAttribute('class', 'material-symbols-outlined btn-delete')
    tdDelete.addEventListener('click', () => {
        removerItem(id)
    });
    tr.appendChild(tdDelete)
    tr.setAttribute('data-id', id)
    tabela.append(tr)
}

const renderizaItens = () => {

    let divItensDoPedido = document.querySelector('#itensDoPedido')
    let divPedidoVazio = document.querySelector('#pedidosVazio')
    if(pedidos.length > 0){
        divItensDoPedido.classList.remove('hide')
        divPedidoVazio.classList.add('hide')
    }else{
        divItensDoPedido.classList.add('hide')
        divPedidoVazio.classList.remove('hide')
    }

    tabela.innerHTML = ''

    // A cada laço do forEach, renderiza uma tr no tbody
    pedidos.forEach(item => {
        let dadosDaTabela = [
            item.codProduto,
            item.descProduto,
            moedaBrasileira(item.precoProduto),
            item.quantidadeProduto,
            moedaBrasileira(item.precoProduto * item.quantidadeProduto)
        ]
        criaTr(tabela, dadosDaTabela, item.codProduto)

    })

    let total = pedidos.reduce((a, b) => a + Number(b.precoProduto * b.quantidadeProduto), 0)
    divTotal.textContent = moedaBrasileira(total)
    limparFormularioPedidos()
}

const removerItem = id => {
    let item = pedidos.filter(item => item.codProduto == id)
    if (window.confirm(`Remover ${item[0].descProduto} do pedido?`)) {
        pedidos = pedidos.filter(element => Number(element.codProduto) != Number(id))
        renderizaItens()
        item.forEach(item => {
            mudarEstoque('aumentar', item.codProduto, item.quantidadeProduto)
        })
        
    }
}

const limparFormularioPedidos = () => {
    inputCodProduto.value = ''
    inputDescProduto.value = ''
    inputPrecoProduto.value = ''
    inputQuantidade.value = ''
}

export const moedaBrasileira = num => Number(num).toLocaleString('pt-br', { style: 'currency', currency: 'brl' })

const marcarUmItemNaTabela = item => {
    let tr = document.querySelector(`.table-pedido tr[data-id="${item.codProduto}"]`)
    tr.classList.add('tr-marcada')
    limparFormularioPedidos()

    // Após ter marcado a tr, depois de 2seg remove a class
    setTimeout(() => tr.classList.remove('tr-marcada'), 2000);

}

// QUANDO PEDIDO FOR FINALIZADO
const finalizarPedido = () => {
    if (pedidos.length < 1) return alert('Crie um Pedido primeiro!', 'error')

    let idUnico = new Date().getTime() * Math.random() * 100000
    let date = new Date()
    let total = pedidos.reduce((a, b) => a + Number(b.precoProduto * b.quantidadeProduto), 0)
    let templatePedidosRealizados = document.querySelector('#boxPedidosRealizados template')
    let clone = templatePedidosRealizados.content.cloneNode(true)

    pedidos.forEach((pedido, index) => {
        let trCriada = criaTabelaPedidosRealizados([
            pedido.codProduto,
            pedido.descProduto,
            moedaBrasileira(pedido.precoProduto),
            pedido.quantidadeProduto,
            moedaBrasileira(pedido.precoProduto * pedido.quantidadeProduto)
        ], idUnico)
        clone.querySelector('tbody').append(trCriada)
        clone.querySelector('h4').textContent = `${date.getHours()}:${date.getMinutes()}` + ' | ' + pedido.nomeCliente
        // caso o usuario mude do cliente adicionando novos itens no pedidos, o pedido gerado será com o nome do ultimo
        // cliente informado naquele pedido!
    })
    
    clone.querySelector('span').textContent = 'PEDIDO: ' + idUnico
    clone.querySelector('tfoot .total').textContent = moedaBrasileira(total)
    clone.querySelector('.btn-delete').addEventListener('click', e => removerPedido(idUnico, e.target))

    alert('Pedido salvo com sucesso!', 'success')
    document.querySelector('#boxPedidosRealizados').append(clone)

    pedidosRealizados.push({ itens: pedidos, id: idUnico, date: date })

    pedidos = []
    resetarPedidos()
    atualizarQuantidadeNoMenu('pedidos', pedidosRealizados.length)
}

const criaTabelaPedidosRealizados = (itens, id) => {
    let tr = document.createElement('tr')
    itens.forEach(item => {
        let td = document.createElement('td')
        td.textContent = item
        tr.appendChild(td)
    })
    tr.setAttribute('data-id', id)
    return tr
}

const resetarPedidos = () => {
    document.querySelector('#formPedidos').reset()
    inputIdCliente.focus()
    renderizaItens()
}

const removerPedido = (id, button) => {
    if (!window.confirm('Deseja realmente excluir este Pedido?')) return
    let item = pedidosRealizados.filter(pedido => pedido.id == id)
    button.parentElement.parentElement.remove()
    pedidosRealizados = pedidosRealizados.filter(element => element.id != id)
    atualizarQuantidadeNoMenu('pedidos', pedidosRealizados.length)
    item[0].itens.forEach(item => {
        mudarEstoque('aumentar', item.codProduto, item.quantidadeProduto)
    })
}