// 1. mostrarMensagem
function mostrarMensagem() {
    console.log("Bem-vindo ao estudo de funções em JavaScript!");
}

mostrarMensagem();


// 2. somaSimples
function somaSimples() {
    let numero1 = 4;
    let numero2 = 6;

    console.log(numero1 + numero2);
}

somaSimples();


// 3. imprimirNome
function imprimirNome() {
    let nome = "João";

    console.log(nome);
}

imprimirNome();


// 4. quadrado
function quadrado(numero) {
    return numero * numero;
}

console.log(quadrado(5));


// 5. converterParaCelsius
function converterParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(converterParaCelsius(86));


// 6. concatenaPalavras
function concatenaPalavras(palavra1, palavra2) {
    return palavra1 + " " + palavra2;
}

console.log(concatenaPalavras("Olá", "mundo"));


// 7. calcularMedia
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

console.log(calcularMedia(7, 8, 9));


// 8. desconto
function desconto(valor, percentual) {
    return valor - (valor * percentual / 100);
}

console.log(desconto(100, 20));


// 9. saudacaoPersonalizada
function saudacaoPersonalizada(nome) {
    console.log("Olá, " + nome + "! Seja bem-vindo.");
}

saudacaoPersonalizada("Maria");


// 10. função anônima multiplicar
const multiplicar = function(numero1, numero2) {
    return numero1 * numero2;
};

console.log(multiplicar(5, 4));


// 11. função anônima dividir
const dividir = function(numero1, numero2) {
    return numero1 / numero2;
};

console.log(dividir(10, 2));


// 12. arrow function dobro
const dobro = (numero) => {
    return numero * 2;
};

console.log(dobro(7));


// 13. arrow function ehPar
const ehPar = (numero) => {
    return numero % 2 === 0;
};

console.log(ehPar(10));
console.log(ehPar(7));


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

calculadora(10, 5);


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

console.log(operacoesAvancadas(2, 3));