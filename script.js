// 1. mostrarMensagem
function mostrarMensagem() {
    console.log("Bem-vindo ao estudo de funções em JavaScript!");
}

mostrarMensagem();


// 2. somaSimples
function somaSimples(numero1, numero2) {
    return numero1 + numero2;
}

let numero1 = Number(prompt("2 - Digite o primeiro número:"));
let numero2 = Number(prompt("2 - Digite o segundo número:"));

console.log("Soma:", somaSimples(numero1, numero2));


// 3. imprimirNome
function imprimirNome(nome) {
    console.log("Nome:", nome);
}

let nome = prompt("3 - Digite seu nome:");

imprimirNome(nome);


// ==========================================
// FUNÇÕES COM RETORNO
// ==========================================

// 4. quadrado
function quadrado(numero) {
    return numero * numero;
}

let numero3 = Number(prompt("4 - Digite um número:"));

console.log("Quadrado:", quadrado(numero3));


// 5. converterParaCelsius
function converterParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let fahrenheit = Number(prompt("5 - Digite a temperatura em Fahrenheit:"));

console.log("Temperatura em Celsius:", converterParaCelsius(fahrenheit));


// 6. concatenaPalavras
function concatenaPalavras(palavra1, palavra2) {
    return palavra1 + " " + palavra2;
}

let palavra1 = prompt("6 - Digite a primeira palavra:");
let palavra2 = prompt("6 - Digite a segunda palavra:");

console.log("Frase:", concatenaPalavras(palavra1, palavra2));


// ==========================================
// FUNÇÕES PARAMETRIZADAS
// ==========================================

// 7. calcularMedia
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let nota1 = Number(prompt("7 - Digite a primeira nota:"));
let nota2 = Number(prompt("7 - Digite a segunda nota:"));
let nota3 = Number(prompt("7 - Digite a terceira nota:"));

console.log("Média:", calcularMedia(nota1, nota2, nota3));


// 8. desconto
function desconto(valor, percentual) {
    return valor - (valor * percentual / 100);
}

let valor = Number(prompt("8 - Digite o valor do produto:"));
let percentual = Number(prompt("8 - Digite o percentual de desconto:"));

console.log("Valor final:", desconto(valor, percentual));


// 9. saudacaoPersonalizada
function saudacaoPersonalizada(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo.`);
}

let nome2 = prompt("9 - Digite seu nome:");

saudacaoPersonalizada(nome2);


// ==========================================
// FUNÇÕES ANÔNIMAS
// ==========================================

// 10. multiplicar
const multiplicar = function(numero1, numero2) {
    return numero1 * numero2;
};

let numero4 = Number(prompt("10 - Digite o primeiro número:"));
let numero5 = Number(prompt("10 - Digite o segundo número:"));

console.log("Multiplicação:", multiplicar(numero4, numero5));


// 11. dividir
const dividir = function(numero1, numero2) {
    return numero1 / numero2;
};

let numero6 = Number(prompt("11 - Digite o primeiro número:"));
let numero7 = Number(prompt("11 - Digite o segundo número:"));

console.log("Divisão:", dividir(numero6, numero7));


// ==========================================
// ARROW FUNCTIONS
// ==========================================

// 12. dobro
const dobro = numero => numero * 2;

let numero8 = Number(prompt("12 - Digite um número:"));

console.log("Dobro:", dobro(numero8));


// 13. ehPar
const ehPar = numero => numero % 2 === 0;

let numero9 = Number(prompt("13 - Digite um número:"));

console.log("É par?", ehPar(numero9));


// ==========================================
// FUNÇÕES DENTRO DE FUNÇÕES
// ==========================================

// 14. calculadora
function calculadora(numero1, numero2) {

    function soma(x, y) {
        return x + y;
    }

    function subtrair(x, y) {
        return x - y;
    }

    console.log("Soma:", soma(numero1, numero2));
    console.log("Subtração:", subtrair(numero1, numero2));
}

let numero10 = Number(prompt("14 - Digite o primeiro número:"));
let numero11 = Number(prompt("14 - Digite o segundo número:"));

calculadora(numero10, numero11);


// 15. operacoesAvancadas
function operacoesAvancadas(numero1, numero2) {

    function produto(x, y) {
        return x * y;
    }

    function potencia(x, y) {
        return x ** y;
    }

    return {
        produto: produto(numero1, numero2),
        potencia: potencia(numero1, numero2)
    };
}

let numero12 = Number(prompt("15 - Digite o primeiro número:"));
let numero13 = Number(prompt("15 - Digite o segundo número:"));

let resultado = operacoesAvancadas(numero12, numero13);

console.log("Produto:", resultado.produto);
console.log("Potência:", resultado.potencia);