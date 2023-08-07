// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

// let larguraRet = parseFloat(prompt('Insira a largura'));
// let alturaRet = parseFloat(prompt('Insira a altura'));

// let area = alturaRet * larguraRet;

// console.log(`A área do retângulo é: ${area}`);

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).

// let numeroUsuario = parseInt(prompt('Insira o número desejado'));

// if (numeroUsuario % 2 === 0) {
//     console.log(`O número ${numeroUsuario} é par`);
// } else {
//     console.log(`O número ${numeroUsuario} é impar`);
// }

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



// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.