// // Crie uma função que calcule a soma de dois números. 

function somar(num1, num2) {
    var  soma = num1 + num2;
    return soma;
}

// Escreva uma função que calcule o produto de três números. 

function calcularProduto(numero1, numero2, numero3) {
    var produto = numero1 * numero2 * numero3;
    return produto;
}

// Crie uma função que verifique se um número é par ou ímpar. 

function ehParOuImpar(num) {
    if (num % 2 === 0) {
        console.log(`${num} é par`)
    } console.log(`${num} é impar`);
}
ehParOuImpar(2);

// Escreva uma função que inverta uma string (por exemplo, "hello" se torna "olleh"). 

function inverterString(str) {
    var stringInvertida = "";
    for (var i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

// Crie uma função que retorne o maior valor de um array de números. 

function encontrarMaiorValor(array) {
    if (array.length === 0) {
        return undefined; 
    }

    var maior = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

// Escreva uma função que calcule a média de um array de números. 

function calcularMedia(array) {
    if (array.length === 0) {
        return undefined; 
    }

    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma += array[i];
    }
    
    var media = soma / array.length;
    return media;
}

// Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente). 

function ehPalindromo(palavra) {
    palavra = palavra.toLowerCase(); 
    var reversed = palavra.split('').reverse().join('');
    return palavra === reversed;
}

// Escreva uma função que conte quantas vezes uma determinada letra aparece em uma string. 

function contarLetra(str, letra) {
    str = str.toLowerCase(); 
    letra = letra.toLowerCase(); 

    var contador = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letra) {
            contador++;
        }
    }
    return contador;
}

// Crie uma função que calcule o fatorial de um número. 

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        var fatorial = 1;
        for (var i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

// Escreva uma função que converta graus Celsius para Fahrenheit. 

function celsiusParaFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Crie uma função que encontre o valor mínimo e máximo em um array de números. 

function encontrarMinMax(array) {
    if (array.length === 0) {
        return undefined; 
    }

    var min = array[0];
    var max = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    return { min: min, max: max };
}
// Escreva uma função que calcule a sequência de Fibonacci até um determinado número de termos. 

function calcularSequenciaFibonacci(numTermos) {
    var fibonacci = [0, 1];

    for (var i = 2; i < numTermos; i++) {
        var proximoTermo = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(proximoTermo);
    }

    return fibonacci;
}

// Crie uma função que verifique se um número é primo. 

function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero <= 3) {
        return true; 
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false; 
    }
    for (var i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false; 
        }
    }
    return true; 
}


// Escreva uma função que remova os elementos duplicados de um array. 

function removerDuplicados(array) {
    var arraySemDuplicados = [];
    for (var i = 0; i < array.length; i++) {
        if (arraySemDuplicados.indexOf(array[i]) === -1) {
            arraySemDuplicados.push(array[i]);
        }
    }
    return arraySemDuplicados;
}

// Crie uma função que ordene um array de números em ordem crescente. 

function ordenarCrescente(array) {
    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Trocar os elementos
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Escreva uma função que retorne o número de dias entre duas datas. 

function calcularDiferencaDias(data1, data2) {
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
    const diffEmMilissegundos = Math.abs(data2 - data1);
    const diffEmDias = Math.floor(diffEmMilissegundos / umDiaEmMilissegundos);
    return diffEmDias;
}

var dataInicio = new Date('2023-08-01'); 
var dataFim = new Date('2023-08-15'); 

calcularDiferencaDias(dataInicio, dataFim);

// Crie uma função que calcule o raio de um círculo com base em sua área.

function calcularRaioPorArea(area) {
    if (area <= 0) {
        return undefined; 
    }
    var raio = Math.sqrt(area / Math.PI);
    return raio;
}

// Escreva uma função que encontre o segundo maior valor em um array de números. 

function encontrarSegundoMaior(array) {
    if (array.length < 2) {
        return undefined; 
    }
    var primeiroMaior = -Infinity;
    var segundoMaior = -Infinity;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > primeiroMaior) {
            segundoMaior = primeiroMaior;
            primeiroMaior = array[i];
        } else if (array[i] > segundoMaior && array[i] !== primeiroMaior) {
            segundoMaior = array[i];
        }
    }

    return segundoMaior;
}

// Crie uma função que converta um valor em dólares para outra moeda com base em uma taxa de câmbio. 

function converterParaMoeda(valorEmDolares, taxaDeCambio) {
    if (valorEmDolares < 0 || taxaDeCambio <= 0) {
        return undefined; 
    }
    var valorConvertido = valorEmDolares * taxaDeCambio;
    return valorConvertido;
}

// Escreva uma função que verifique se duas strings são anagramas (contêm as mesmas letras, mas em ordens diferentes).

function saoAnagramas(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false; // Se as strings têm tamanhos diferentes, não podem ser anagramas
    }
    var contadorLetras = {};

    for (var i = 0; i < str1.length; i++) {
        var letra = str1[i];
        contadorLetras[letra] = (contadorLetras[letra] || 0) + 1;
    }

    for (var i = 0; i < str2.length; i++) {
        var letra = str2[i];
        if (!contadorLetras[letra]) {
            return false; // Se alguma letra em str2 não está em str1, não são anagramas
        }
        contadorLetras[letra]--;
    }

    return true; // Se todas as letras correspondem, são anagramas
}
