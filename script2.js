const form = document.getElementById("cadastroForm");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");
const perfil = document.getElementById("perfil");
const termos = document.getElementById("termos");

const mensagem = document.getElementById("mensagem");

const saidaNome = document.getElementById("saidaNome");
const saidaEmail = document.getElementById("saidaEmail");
const saidaPerfil = document.getElementById("saidaPerfil");


form.addEventListener("submit", function(evento) {

    evento.preventDefault();

    mensagem.textContent = "";
    mensagem.className = "";


    if (nome.value.trim() === "") {
        mensagem.textContent = "Digite seu nome completo.";
        mensagem.className = "erro";
        nome.focus();
        return;
    }


    if (!email.checkValidity()) {
        mensagem.textContent = "Digite um e-mail válido.";
        mensagem.className = "erro";
        email.focus();
        return;
    }


    if (senha.value.length < 6) {
        mensagem.textContent = "A senha deve ter no mínimo 6 caracteres.";
        mensagem.className = "erro";
        senha.focus();
        return;
    }


    if (senha.value !== confirmaSenha.value) {
        mensagem.textContent = "As senhas não conferem.";
        mensagem.className = "erro";
        confirmaSenha.focus();
        return;
    }


    if (perfil.value === "") {
        mensagem.textContent = "Selecione um perfil técnico.";
        mensagem.className = "erro";
        perfil.focus();
        return;
    }


    if (!termos.checked) {
        mensagem.textContent = "Você precisa aceitar os Termos de Uso.";
        mensagem.className = "erro";
        termos.focus();
        return;
    }


    saidaNome.textContent = nome.value.trim();
    saidaEmail.textContent = email.value.trim();
    saidaPerfil.textContent = perfil.value;


    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.className = "sucesso";


    form.reset();

});