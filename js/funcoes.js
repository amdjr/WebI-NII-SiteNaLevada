/* ao recarregar volta para tela 1 */

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
document.querySelector('html').style.scrollBehavior = 'auto';

/* Exibir menu */

const btnMobile = document.getElementById('btn-menu');

function exibirMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', exibirMenu);
btnMobile.addEventListener('touchstart', exibirMenu);

/* Fechar menu automaticamente*/

var fechar = document.getElementById('menu');

function fecharMenu() {
    document.getElementById('nav').classList.remove('active');
}


fechar.addEventListener('click', fecharMenu);
fechar.addEventListener('touchstart', fecharMenu);

/* modal formulário */

function abrirForm() {
    let modal = document.getElementById("contatoModal");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function fecharForm() {
    let modal = document.getElementById("contatoModal");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/* Função Validar */

function validarForm() {
    var nome = formulario.nome.value;
    var email = formulario.email.value;

    if (nome == "" && email == "") {
        document.getElementById('nome').style.border = "2px solid red";
        document.getElementById('email').style.border = "2px solid red";
        document.getElementById('status').style.backgroundColor = "tomato";
        document.getElementById('status').innerHTML = "Para continuar preencha todos os campos.";
    } else if (nome == "") {
        document.getElementById('email').style.border = "none";
        document.getElementById('nome').style.border = "2px solid red";
        document.getElementById('status').style.backgroundColor = "tomato";
        document.getElementById('status').innerHTML = "Preencha seu nome.";
    } else if (email == "" || (email.search("@" && ".com") == -1)) {
        document.getElementById('nome').style.border = "none";
        document.getElementById('email').style.border = "2px solid red";
        document.getElementById('status').style.backgroundColor = "tomato";
        document.getElementById('status').innerHTML = "Email inválido";
    } else {
        document.getElementById('nome').style.border = "none";
        document.getElementById('email').style.border = "none";
        document.getElementById('status').style.backgroundColor = "rgba(7, 177, 120, 0.9)";
        document.getElementById('status').innerHTML = "Email cadastrado!";

    }

    console.log("Nome: ", nome, "|", "Email: ", email);

}

function limparForm() {
    document.nome = "";
    document.email = "";
    document.getElementById('nome').style.border = "none";
    document.getElementById('email').style.border = "none";
    document.getElementById('status').innerHTML = "";
    document.getElementById('status').style.backgroundColor = "initial";

}

/* Diminuir volume inicial do player */

var music = document.getElementById("audio");
music.volume = 0.1;

/* modal 1 */

function abrirModal1() {
    let modal = document.getElementById("telaModal1");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function fecharModal1() {
    let modal = document.getElementById("telaModal1");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/* modal 2 */

function abrirModal2() {
    let modal = document.getElementById("telaModal2");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function fecharModal2() {
    let modal = document.getElementById("telaModal2");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

}

/* modal 3 */

function abrirModal3() {
    let modal = document.getElementById("telaModal3");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function fecharModal3() {
    let modal = document.getElementById("telaModal3");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/* modal 4 */

function abrirModal4() {
    let modal = document.getElementById("telaModal4");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function fecharModal4() {
    let modal = document.getElementById("telaModal4");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/* modal 5 */

function abrirModal5() {
    let modal = document.getElementById("telaModal5");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function fecharModal5() {
    let modal = document.getElementById("telaModal5");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/* modal 6 */

function abrirModal6() {
    let modal = document.getElementById("telaModal6");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function fecharModal6() {
    let modal = document.getElementById("telaModal6");

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
