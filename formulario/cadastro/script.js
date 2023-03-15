const form = document.getElementById('form')
const user = document.getElementById('user')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmSenha = document.getElementById('senha-confirm')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const userValue = user.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const confirmSenhaValue = confirmSenha.value;

    if (userValue === "") {
        setErrorFor(user, "Nome de Usuário Invalido");
    } else {
        setSuccessFor(user)
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatorio")
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor insira um email valido")
    } else {
        setSuccessFor(email)
    }

    if (senhaValue === "") {
        setErrorFor(senha, "A senha é obrigatoria")
    } else if (senhaValue < 8) {
        setErrorFor(senha, "A senha precisa ter 8 caracteres no mínimo")
    } else {
        setSuccessFor(senha)
    }

    if (confirmSenhaValue === "") {
        setErrorFor(confirmSenha, "A verificação de senha  é obrigatoria")
    } else if (confirmSenhaValue !== senhaValue) {
        setErrorFor(confirmSenha, "As senhas não são iguais")
    } else {
        setSuccessFor(confirmSenha)
    }

}

function setErrorFor(input, message) {
    const formCont = input.parentElement;
    const small = formCont.querySelector("small")

    small.innerText = message;

    formCont.className = "form-cont error";

}

function setSuccessFor(input) {
    const formCont = input.parentElement;

    formCont.className = "form-cont success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }