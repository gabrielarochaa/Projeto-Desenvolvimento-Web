// Principal3.js

function validateForm() {
    // condições de validação aqui
    var usuario = document.getElementById('usuario').value;
    var cpf = document.getElementById('cpf').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var email = document.getElementById('email').value;
    var contato = document.getElementById('contato').value;

    // todos os campos devem ser preenchidos
    if (usuario === '' || cpf === '' || dataNascimento === '' || email === '' || contato === '') {
        alert('Por favor, preencha todos os campos.');
        return false; // Impede o envio do formulário
    }

    // Adiciona um alerta indicando que o usuário foi cadastrado com sucesso
alert('Usuário cadastrado com sucesso!');


    return true; // Permite o envio do formulário se todas as condições forem atendidas
}

function onMouseOverForm() {
    console.log("Mouse sobre o formulário!");
}


function onEmailChange() {
    console.log("E-mail alterado:", document.querySelector('input[type="email"]').value);
}
