import { formularioModoExibicao } from './js/pageClientes.js'
import { formularioModoExibicao as formularioModoExibicaoProdutos } from './js/pageProdutos.js'
import { layout } from './js/layout.js'

layout()
formularioModoExibicao() // inicia o formulario modo exibição, no primeiro registro, index 0
formularioModoExibicaoProdutos()


window.alert = (msg, type = 'info') => {
    document.querySelectorAll('.notification').forEach(element => {
        element.remove()
    })
    
    let divPai = document.querySelector(".section-itens")
    let divNotification = document.createElement('div')
    divNotification.setAttribute('class','notification show '+type)
    let spanImage = document.createElement('span')
    spanImage.setAttribute('class','image material-symbols-outlined')
    let divText = document.createElement('div')
    divText.setAttribute('class','text')
    divText.innerHTML = msg
    let divclose = document.createElement('div')
    divclose.setAttribute('class','close')
    divclose.innerHTML = 'x'
    divclose.addEventListener('click', ()=> {
        divNotification.remove() 
    })
    divNotification.append(spanImage, divText, divclose)
    divPai.append(divNotification)
    
    setTimeout(() => {
        divNotification.remove()
    }, 3000); 
}