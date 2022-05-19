import { validaFormularios, renderizaUmErro } from './validacaoFormulario.js'

const btnSubmitLogin = document.querySelector("#login button")
const inputUsuario   = document.querySelector("#login input[name='usuario']")
const inputSenha     = document.querySelector("#login input[name='senha']")
const formLogin      = document.querySelector("#login form")

formLogin.addEventListener('submit', e => {
    if (validaFormularios('login', e)) login()
})


const fetchData = async () => {
    try {
        const res = await fetch('./database/usuario.json')
        let usuarios = await res.json()
        return usuarios.users
    } catch (err) {
        console.log(err)
    }
}
fetchData()
const login = async () => {
    let usuarioParaLogar = { user: inputUsuario.value, pws: inputSenha.value }
    btnSubmitLogin.innerHTML = btnSubmitLogin.dataset.loading
    setTimeout(async () => {
        let usuarios = await fetchData()
        let procurarUser = usuarios.find(users => (users.user == usuarioParaLogar.user))
        let procurarSenha = usuarios.find(users => (users.pws == usuarioParaLogar.pws && users.user == usuarioParaLogar.user))
        btnSubmitLogin.innerHTML = btnSubmitLogin.dataset.text
        
        if (!procurarUser) return renderizaUmErro(inputUsuario, inputUsuario, `Este usuário não existe!`)
        if (procurarUser && !procurarSenha) return renderizaUmErro(inputSenha, inputSenha, `Senha Incorreta!`)

        return loginAutorizado()
    }, 777);
}

const loginAutorizado = () => {
    // falta terminar!
    window.location.href = 'panel.html'
}





