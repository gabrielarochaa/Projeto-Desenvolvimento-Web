// Principal3.js

function loadPage() {
    alert("Bem vindo!(a)")
    }

function onMouseOverForm() {
    console.log("Mouse sobre o formulário!");
}


function onEmailChange() {
    console.log("E-mail alterado:", document.querySelector('input[type="email"]').value);
}

function redirecionarPrincipal() {
    var confirmacao = confirm("Usuario cadastrado com sucesso!");
    window.location.href = "Principal.html";
}

function redirecionarParaFormulario() {
    window.location.href = "compra-passagem.html";

  }
 function exibirPromptFeedback() {
    var feedback = prompt("Por favor, forneça seu feedback sobre nossa agência de passagens aéreas:");

    alert("Obrigado pelo seu feedback!\n\nComentário:\n" + feedback);
}
