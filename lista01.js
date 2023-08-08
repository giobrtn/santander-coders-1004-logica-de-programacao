// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

let larguraRet = parseFloat(prompt('Insira a largura'));
let alturaRet = parseFloat(prompt('Insira a altura'));

let area = alturaRet * larguraRet;

console.log(`A área do retângulo é: ${area}`);

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).

let numeroUsuario = parseInt(prompt('Insira o número desejado'));

if (numeroUsuario % 2 === 0) {
    console.log(`O número ${numeroUsuario} é par`);
} else {
    console.log(`O número ${numeroUsuario} é impar`);
}

// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript"

function contemJavascript(string) {
    if (string.includes('javascript')) {
        return console.log('A string possui a palavra "javascript".');
    } return console.log('A string não possui a palavra "javascript".');
};

contemJavascript("Meu nome é javascript");

// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas. 


function compararString(firstString, secondString) {
    let firstLowerstring = firstString.toLowerCase();
    let secondLowerstring = secondString.toLowerCase();
    if (firstLowerstring === secondLowerstring) {
        return console.log('As strings são iguais.')
    } return console.log('As strings são diferentes.')
}

compararString("Primeira string", "prImeira sTring")

//5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

function concatArray(arr1, arr2) {
    arr3 = arr1.concat(arr2);
    return console.log(`Lista resultante da concatenação entre os arrays é ${arr3}`);
}
concatArray([1, 2, 3],  [4, 5, 6]);

// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length. 

const arrayValores = [10, 5, 2, 8, 9];
const mediaArray = arrayValores.reduce((acumulador, valor) => acumulador + valor, 0) / arrayValores.length;
console.log(`A média dos valores do array é: ${mediaArray}`);

// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".

function getDataAtual() {
    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = String(agora.getFullYear());
    const hora = String(agora.getHours()).padStart(2, '0');
    const minuto = String(agora.getMinutes()).padStart(2, '0');
    const segundo = String(agora.getSeconds()).padStart(2, '0');

    const stringHora = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
    return stringHora;
}

console.log(getDataAtual())


// 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max(). 

function maiorValorArray(array) {
    const maiorValor = Math.max(...array);
    return maiorValor;
}

const arrayNumeros = [1, 2, 5, 100, 20, 400, 353, 1000];
const maiorNumero = maiorValorArray(arrayNumeros);
console.log("O maior valor no array é: " + maiorNumero); 

// 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos. 

function gerarAleatorio(min, max) {
    const intervalo = max - min;
    const numAleatorio = Math.floor(Math.random() * (intervalo + 1)) + min;
    return numAleatorio;
}


// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.


function numeroPrimo(num) {
    for (let divisor = 2 ; divisor < num; divisor++)
    if (num % divisor == 0) return console.log(`O número ${num} não é primo.`);
    return console.log(`O número ${num} é primo.`);
}
let numeroInputUsuario = parseInt(prompt('Digite um número: '));
numeroPrimo(numeroInputUsuario)

//Coerção e Tipos de Dados:

//11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado. 

const varString = "5";
const varNumero = 2;

let resultadoMultiplicacao = varString * varNumero;
console.log(resultadoMultiplicacao);
// A multiplicação ocorre pois o javascript é uma linguagem dinamica e ele tenta ajusta os dados conforme a situação utilizando a coerção. Nesse caso é uma coerção implicita, onde não foi usado nenhum artificio da linguagem pra converter os dados.

//12- Converta a string "123" em um número inteiro e armazene-o em uma variável. 

let stringTeste = "123";
let numeroInteiro = parseInt(stringTeste);
console.log(numeroInteiro);

//13- Escreva um programa que adicione um número e uma string. 

let varStr = "O número é ";
let varNum = 5;
let adicionarStringNum = varStr + varNum;
console.log(adicionarStringNum);

// 14- Explique o resultado e discuta a coerção que ocorre. 
// Ocorre uma coerção implícita assim como ocorre no ex 11, onde o javascript  ajusta os dados para caber na situação. Como a string não pode ser convertida pra numero, ele converteu o numero pra string.

// 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo. 

var varNull = null;
var varUndefined = undefined;

let comparacaoNullUnd = varNull === varUndefined;
console.log(comparacaoNullUnd);


// 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.

function ehFuncao(variavel) {
    return typeof variavel === 'function';
}

const funcao = function() {}
console.log(ehFuncao(funcao));

// Operadores Matemáticos e Lógicos:

//18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20. 

const resultadoExpressao = (10 + 5) * 3 / 20;
console.log(resultadoExpressao);

//19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo. 

function ehPositivoImpar(number){
    return number > 0 && number % 2 !== 0;
}
console.log(ehPositivoImpar(2))

//20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400. 

function ehBissexto(ano){
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        return true;
    } return false;
}
const ano = prompt("Digite um ano válido: ");

if (ehBissexto(ano))  {
    console.log(`O ano ${ano} é bissexto.`)
}else  {
    console.log(`O ano ${ano} não é bissexto.`)
}

// 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos). 
const usuario = {
    nome: "Joao",
    idade: 18,
    permissao: "banido"
}
function ehMaiorPermitido(idade, permissao){
    if (idade >= 18 && permissao !== "banido" ) {
        return console.log("Entrada permitida");
    } return console.log("Entrada bloqueada, usuario banido");
}

ehMaiorPermitido(usuario.idade, usuario.permissao)

//22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.
const dataBase = [
    { username: 'usuario123', password: 'jorginhomeemprestaa12'}
]
function fazerLogin(){
    const username = prompt("Digite seu nome de usuário: ")
    const password = prompt("Digite sua senha: ")

    const userFound = dataBase.find(user => user.username === username && user.password === password)

    if (userFound) {
        console.log(`Logado com sucesso. Bem vindo, ${username}`)
    } else {
        console.log(`Erro ao logar-se. Usuário ou senha incorretos, tente novamente.`)
    }
}

fazerLogin()