const form = document.getElementById('form')
const email = document.getElementById('email')
const senha = document.getElementById('senha')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const emailValue = email.value;
    const senhaValue = senha.value;

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatorio")
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Usuario ou senha invalido")
    } else {
        setSuccessFor(email)
    }

    if (senhaValue === "") {
        setErrorFor(senha, "A senha é obrigatoria")
    } else if (senhaValue < 8) {
        setErrorFor(senha, "Usuario ou senha invalido")
    } else {
        setSuccessFor(senha)
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