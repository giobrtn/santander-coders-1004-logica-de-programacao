// Dicionários (Objetos):
// 1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.
const estudante = { 
    nome: "Giovanni",
    idade: 18,
    curso: "FrontEnd Ada-Tech",
    notas: [10, 10, 10]
}
console.log(estudante.nome)

// 2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.

const paises = {
    'Brasil': 'Brasilia',
    'Estados Unidos': 'Washington, D.C.',
    'Canadá': 'Ottawa'
}

function getCapital(nomeDoPais) {
    const capital = paises[nomeDoPais];
    if (capital) {
        return capital;
    } else {
        return 'Capital não encontrada';
    }
}
const pais = 'Brasil';
const capital = getCapital(pais); 
console.log(`A capital do ${pais} é ${capital}`)

// 3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.

const precoFrutas = {
    "maçã": 2.50,
    "banana": 1.00,
    "laranja": 1.80,
    "uva": 3.2,
    "morango": 4.5,
}

function calcularPrecoCesta(cesta) {
    let total = 0;

    for (let fruta in cesta) {
        if (precoFrutas.hasOwnProperty(fruta)) {
            total += cesta[fruta] * precoFrutas[fruta];
        } else {
            console.log(`A fruta ${fruta} não está no dicionário de preços.`)
        }
    } return total;
}

const minhaCesta = {
    "maçã": 3,
    "banana": 3,
    "uva": 3,
    "morango": 2,
};

const precoTotal = calcularPrecoCesta(minhaCesta);

// 4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.

const meuLivro = {
    titulo: "Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
    anoPublicacao: "1954",
}

function imprimirInformacoesDoLivro(livro) {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

// Map:
// 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.

const arrayNumeros = [1, 2, 3, 5, 10];

function elevarQuadrado(numero) {
    return numero * numero;
}
const numerosQuadrado = arrayNumeros.map(elevarQuadrado);

// 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.


const palavras = ["maçã", "banana", "laranja", "uva", "morango"];


function capitalizarPrimeiraLetra(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}


const palavrasComPrimeiraLetraMaiuscula = palavras.map(capitalizarPrimeiraLetra);




// 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).

const produtos = [
    { nome: "Maçã", preco: 2.5, quantidade: 5 },
    { nome: "Banana", preco: 1.0, quantidade: 8 },
    { nome: "Laranja", preco: 1.8, quantidade: 3 },
    { nome: "Uva", preco: 3.2, quantidade: 2 },
    { nome: "Morango", preco: 4.5, quantidade: 4 }
];


const produtosComValorTotal = produtos.map(produto => {
    return {
        ...produto,
        valorTotal: produto.preco * produto.quantidade
    };
});

console.log(produtosComValorTotal);

// 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.

const temperaturasCelsius = [0, 15, 19, 23, 31];

function celsiusParaFahrenheit(temperaturasCelsius) {
    return (temperaturasCelsius * 9/5) + 32;
}
const temperaturasFahrenheit = temperaturasCelsius.map(celsiusParaFahrenheit);
console.log(temperaturasFahrenheit);

// Reduce:
// 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.

const numerosReduce = [1, 2, 3, 4, 10]

const soma = numerosReduce.reduce((acumulador, numero) => {
    return acumulador + numero;

}, 0);
console.log(`A soma dos elementos é: ${soma}.`);

// 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.

const palavrasReduce = ["Olá", "mundo", "como", "vai"];

const resultado = palavrasReduce.reduce((acumulador, palavra) => {
    return acumulador + " " + palavra;
}, "");

console.log(resultado);

// 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.

const despesas = [
    { valor: 50, categoria: "Alimentação" },
    { valor: 30, categoria: "Transporte" },
    { valor: 20, categoria: "Alimentação" },
    { valor: 15, categoria: "Outros" },
    { valor: 40, categoria: "Transporte" }
];

const categoriaEspecifica = "Alimentação";

const totalDespesasCategoria = despesas.reduce((acumulador, despesa) => {
    if (despesa.categoria === categoriaEspecifica) {
        return acumulador + despesa.valor;
    }
    return acumulador;
}, 0);

// 12- Dado um array de números, use o método reduce() para encontrar o maior número no array.

const numerosReduceMaior = [12, 45, 6, 27, 8, 56, 34, 78];

const maiorNumero = numerosReduceMaior.reduce((maior, numero) => {
    return numero > maior ? numero : maior;
}, numerosReduceMaior[0]); 


console.log("O maior número é:", maiorNumero);

// Laços de Repetiçoes
// 13- Imprima os números de 1 a 10 utilizando um loop for.

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 14- Imprima os números pares de 1 a 20 utilizando um loop for.
for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 15- Calcule a soma dos números de 1 a 50 utilizando um loop for.
let somaNumeros = 0;
for (let i = 0; i < 51; i++) {
    somaNumeros += i;
    
}
console.log(somaNumeros);
// 16- Imprima a tabuada do 7 utilizando um loop for.
let tabuadaSete = 0;
for (let i = 1; i < 11; i++) {
    tabuadaSete = (i * 7);
    console.log(`7 x ${i} = ${tabuadaSete}`)
}
// 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.
let numeroUsuario = 22;
for (let i = 0; i <= numeroUsuario; i++) {
    console.log(i);
}
// 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.
function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
        return false;
        }
    }
    
    return true;
}

// const numeroDigitado = parseInt(prompt("Digite um número:"));

// if (ehPrimo(numeroDigitado)) {
//     console.log(`${numeroDigitado} é um número primo.`);
// } else {
//     console.log(`${numeroDigitado} não é um número primo.`);
// }
// 19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)

function fibonacciAteDecimoTermo() {
    const sequencia = [0, 1];

    for (let i = 2; i < 10; i++) {
        const proximoTermo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoTermo);
    }

    return sequencia;
}


const sequenciaFibonacci = fibonacciAteDecimoTermo();
console.log(`A sequencia de Fibonacci até o décimo termo é ${sequenciaFibonacci}`)

// 20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    
    return fatorial;
}

const numeroDigitadoFatorial = 23;
const fatorialCalculado = calcularFatorial(numeroDigitadoFatorial);
console.log(`O fatorial do ${numeroDigitadoFatorial} é ${fatorialCalculado}`)

// 21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.
function calcularTermoTriangular(n) {
    return (n * (n + 1)) / 2;
}
const numeroDeTermos = 10; 

for (let i = 1; i <= numeroDeTermos; i++) {
    const termo = calcularTermoTriangular(i);
    process.stdout.write(termo.toString()); // Usamos process.stdout.write() para imprimir sem quebra de linha
    
    if (i < numeroDeTermos) {
        process.stdout.write(", ");
    }
}

// 22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.

function ehNumeroPerfeito(numero) {
    let somaDivisores = 0;

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
        somaDivisores += i;
        }
    }

    return somaDivisores === numero;
}

console.log("Números perfeitos de 1 a 1000:");

for (let i = 1; i <= 1000; i++) {
    if (ehNumeroPerfeito(i)) {
        console.log(i);
    }
}

// 23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.


function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}


const numeroParaAdivinhar = gerarNumeroAleatorio();


let tentativas = 0;
let palpite;

while (palpite !== numeroParaAdivinhar) {
    palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));
    
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, digite um número válido entre 1 e 100.");
        continue;
    }
    
    tentativas++;
    
    if (palpite < numeroParaAdivinhar) {
        console.log("O número é maior. Tente novamente.");
    } else if (palpite > numeroParaAdivinhar) {
        console.log("O número é menor. Tente novamente.");
    }
}


console.log(`Parabéns! Você acertou o número ${numeroParaAdivinhar} em ${tentativas} tentativas.`);


// 24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.

function fibonacciSequence() {
    const sequence = [0, 1];
    
    while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= 1000) {
        const nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextTerm);
    }
    
    return sequence;
}

const fibonacciSeq = fibonacciSequence();
console.log("Sequência de Fibonacci até o próximo termo maior que 1000:");
console.log(fibonacciSeq);

// 25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.

function calcularMedia(listaNumeros) {
    if (listaNumeros.length === 0) {
        return null;
    }
    const soma = listaNumeros.reduce((acc, num) => acc + num, 0);
    const media = soma / listaNumeros.length;
    return media;
}

function interacaoUsuario() {
    const numElementos = parseInt(prompt("Digite quantos números deseja inserir:"));
    const numeros = [];

    for (let i = 0; i < numElementos; i++) {
        const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        numeros.push(numero);
    }

    const media = calcularMedia(numeros);

    if (media !== null) {
        console.log(`A média dos números inseridos é: ${media}`);
    } else {
        console.log("Nenhum número foi inserido.");
    }
}

interacaoUsuario();

// 26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.

function adivinharNumeroSecreto() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    while (true) {
        const palpite = parseInt(prompt("Adivinhe o número secreto (entre 1 e 100):"));
        tentativas++;

        if (palpite === numeroSecreto) {
        console.log(`Parabéns! Você adivinhou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
        break;
        } else if (palpite < numeroSecreto) {
        console.log("Tente novamente. O número secreto é maior.");
        } else {
        console.log("Tente novamente. O número secreto é menor.");
        }
    }
}

adivinharNumeroSecreto();

// 27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.

// 28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.

// 29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.

// 30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.

// Condicionais
// 31- Verificação de vogal ou consoante

// Peça ao usuário para digitar uma letra. Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante. Exiba uma mensagem indicando se a letra é uma vogal ou consoante.

// 32- Calculadora simples

// Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /). Use uma estrutura condicional para realizar a operação selecionada nos números dados. Exiba o resultado da operação.

// 33- Verificação de número primo

// Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo). Exiba uma mensagem indicando se o número é primo ou não.

// 34- Conversão de temperatura

// Peça ao usuário para digitar uma temperatura em graus Celsius. Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário. Exiba o resultado da conversão.

// 35- Dia da semana por extenso

// Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana. Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.

// 36- Verificação de ano bissexto

// Peça ao usuário para digitar um ano. Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400). Exiba uma mensagem indicando se o ano é bissexto ou não.

// 37- Contador de vogais e consoantes

// Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para contar o número de vogais e consoantes na entrada. Exiba os resultados separadamente.

// 38- Verificação de número positivo, negativo ou zero

// Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero. Exiba uma mensagem indicando a natureza do número.

// 39- Sistema de bilhete de cinema

// Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não"). Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10. Exiba o preço do bilhete.

// 40- Verificação de palíndromo

// Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás). Exiba uma mensagem indicando se a entrada é um palíndromo ou não.