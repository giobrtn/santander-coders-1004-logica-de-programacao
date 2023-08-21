// Callback
// Exercício 1: Callback Básico Crie uma função chamada executarCallback que recebe uma função de callback como argumento e a executa.

function executarCallback(callback) {
    callback();
}

function minhaFuncaoCallback() {
    console.log("A função de callback foi executada");
}

executarCallback(minhaFuncaoCallback);

// Exercício 2: Manipulação de Array Crie uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada elemento do array e retornar um novo array com os elementos dobrados.

function dobrarNumeros(array, callback) {
    var novoArray = [];
    for (var i = 0; i < array.length; i++) {
        novoArray.push(callback(array[i]));
    }
    return novoArray;
}

function dobrar(numero) {
    return numero * 2;
}

var numeros = [1, 2, 3, 4, 5];
var novoArrayDobrado = dobrarNumeros(numeros, dobrar);
console.log("Novo array dobrado:", novoArrayDobrado);

// Exercício 3: Filtragem com Callback Crie uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve retornar um novo array contendo apenas as palavras que atendem ao critério da função de callback.

function filtrarPalavras(array, callback) {
    var novoArrayFiltrado = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            novoArrayFiltrado.push(array[i]);
        }
    }
    return novoArrayFiltrado;
}

function criterioDeFiltro(palavra) {
    return palavra.length >= 5;
}

var palavras = ["apple", "banana", "cherry", "grape", "orange", "watermelon"];
var palavrasFiltradas = filtrarPalavras(palavras, criterioDeFiltro);
console.log("Palavras filtradas:", palavrasFiltradas);

// Exercício 4: Ordenação com Callback Crie uma função chamada ordenarNumeros que recebe um array de números e uma função de callback para determinar a ordem de ordenação. A função ordenarNumeros deve retornar um novo array com os números ordenados de acordo com o critério da função de callback.

function ordenarNumeros(array, callback) {
    return array.slice().sort(callback);
}


const numeros = [5, 2, 8, 1, 10];

const ordenacaoCrescente = (a, b) => a - b;
const numerosOrdenadosCrescente = ordenarNumeros(numeros, ordenacaoCrescente);
console.log("Ordem crescente:", numerosOrdenadosCrescente);

const ordenacaoDecrescente = (a, b) => b - a;
const numerosOrdenadosDecrescente = ordenarNumeros(numeros, ordenacaoDecrescente);
console.log("Ordem decrescente:", numerosOrdenadosDecrescente);

// Exercício 5: Timer com Callback Crie uma função chamada executarAposTempo que recebe uma função de callback e um tempo em milissegundos. A função executarAposTempo deve agendar a execução da função de callback após o tempo especificado.

function executarAposTempo(callback, tempoEmMilissegundos) {
    setTimeout(callback, tempoEmMilissegundos);
}

  // Exemplo de uso:

function minhaCallback() {
    console.log("A função de callback foi executada!");
}

console.log("Agendando a execução da função de callback...");
executarAposTempo(minhaCallback, 2000);

// Promise
// Exercício 1: Criando uma Promise Simples Crie uma Promise simples que retorna uma mensagem de sucesso após 2 segundos. Use a função setTimeout para simular um atraso.

function aguardarDoisSegundos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Aguardou por 2 segundos e teve sucesso!");
        }, 2000);
    });
}

console.log("Iniciando a espera...");
aguardarDoisSegundos()
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error("Ocorreu um erro:", erro);
    });

// Exercício 2: Tratamento de Erro em Promise Crie uma Promise que simula uma operação que pode falhar. Se a operação for bem-sucedida, resolva a Promise com uma mensagem de sucesso. Caso contrário, rejeite-a com uma mensagem de erro. (Lembre-se de usar o reject)

function operacaoQuePodeFalhar(sucesso) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (sucesso) {
            resolve("Operação bem-sucedida!");
        } else {
            reject("A operação falhou!");
        }
        }, 1000);
    });
}



console.log("Iniciando operação que pode falhar...");
const sucesso = true; // Alterne entre true e false para testar diferentes cenários
operacaoQuePodeFalhar(sucesso)
    .then((mensagem) => {
        console.log("Sucesso:", mensagem);
    })
    .catch((erro) => {
        console.error("Erro:", erro);
    });

// Exercício 4: Encadeamento de Promises Crie um encadeamento de Promises que realiza uma sequência de operações assíncronas. Por exemplo, faça uma requisição a uma API, processe os dados e, em seguida, realize outra operação.

function fazerRequisicaoAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
        const dadosAPI = { resultado: "Dados da API" };
        resolve(dadosAPI);
        }, 1000);
    });
}

  // Função simulada para processar os dados recebidos
function processarDados(dados) {
    return new Promise((resolve) => {
        setTimeout(() => {
        const dadosProcessados = { ...dados, processado: true };
        resolve(dadosProcessados);
        }, 500);
    });
}


console.log("Iniciando encadeamento de operações assíncronas...");

fazerRequisicaoAPI()
    .then((dadosAPI) => {
        console.log("Dados da API recebidos:", dadosAPI);
        return processarDados(dadosAPI);
    })
    .then((dadosProcessados) => {
        console.log("Dados processados:", dadosProcessados);
        console.log("Operações assíncronas concluídas!");
    })
    .catch((erro) => {
        console.error("Ocorreu um erro:", erro);
    });

// Exercício 1: Promessa com Atraso Aleatório Crie uma função que retorna uma Promise que será resolvida após um tempo aleatório entre 1 e 5 segundos. Use a função setTimeout e Math.random() para criar esse atraso variável.

function promiseComAtrasoAleatorio() {
    const tempoAleatorio = Math.random() * 4000 + 1000; // Entre 1 e 5 segundos em milissegundos

    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(`Promise resolvida após ${tempoAleatorio / 1000} segundos`);
        }, tempoAleatorio);
    });
}

console.log("Iniciando a Promise com atraso aleatório...");

promiseComAtrasoAleatorio()
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error("Ocorreu um erro:", erro);
    });

// Exercício 2: Rejeição de Promessa Crie uma função que retorna uma Promise que será rejeitada após um tempo aleatório entre 1 e 3 segundos.

function promiseRejeitadaComAtrasoAleatorio() {
    const tempoAleatorio = Math.random() * 2000 + 1000; 

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        reject(`Promise rejeitada após ${tempoAleatorio / 1000} segundos`);
        }, tempoAleatorio);
    });
}

console.log("Iniciando a Promise rejeitada com atraso...");

promiseRejeitadaComAtrasoAleatorio()
    .then((mensagem) => {
        console.log(mensagem); 
    })
    .catch((erro) => {
        console.error("Erro:", erro);
    });

// async e await
// Exercício 1: Função Assíncrona Simples Crie uma função assíncrona que retorna uma mensagem após um atraso de 2 segundos.

async function mensagemComAtraso() {
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });

    return "Mensagem após 2 segundos de atraso.";
}

console.log("Iniciando a função assíncrona com atraso...");

mensagemComAtraso()
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error("Ocorreu um erro:", erro);
    });

// Exercício 2: Tratamento de Erros com async/await Crie uma função assíncrona que simula uma operação que pode falhar. Use try e catch para lidar com erros.

async function operacaoQuePodeFalhar(sucesso) {
    try {
        if (sucesso) {
        return "Operação bem-sucedida!";
        } else {
        throw new Error("A operação falhou!");
        }
    } catch (erro) {
        throw erro; 
    }
}

console.log("Iniciando a função assíncrona que pode falhar...");

const sucesso = true; // Alterne entre true e false para testar diferentes cenários
operacaoQuePodeFalhar(sucesso)
    .then((mensagem) => {
        console.log("Sucesso:", mensagem);
    })
    .catch((erro) => {
        console.error("Erro:", erro.message);
    });

// Exercício 3: Encadeamento com async/await Crie uma série de funções assíncronas que dependem dos resultados anteriores.

async function funcao1() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Função 1 concluída");
    return 10;
}

async function funcao2(resultadoFuncao1) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Função 2 concluída");
    return resultadoFuncao1 * 2;
}

async function funcao3(resultadoFuncao2) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Função 3 concluída");
    return resultadoFuncao2 + 5;
}

  // Exemplo de uso:

(async () => {
    try {
        console.log("Iniciando série de funções assíncronas...");
        const resultado1 = await funcao1();
        const resultado2 = await funcao2(resultado1);
        const resultado3 = await funcao3(resultado2);
        console.log("Resultado final:", resultado3);
    } catch (erro) {
        console.error("Ocorreu um erro:", erro);
    }
})();

// Exercício 5: Consumindo API com async/await Crie uma função que utiliza fetch com async e await para buscar dados de uma API.

async function buscarDadosPokemon(nomePokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
        if (!response.ok) {
        throw new Error(`Não foi possível buscar os dados do Pokémon ${nomePokemon}`);
        }

        const data = await response.json();
        return data;
    } catch (erro) {
        throw erro;
    }
}

// Exemplo de uso:

(async () => {
    try {
        const nomePokemon = 'pikachu';
        console.log(`Buscando dados do Pokémon ${nomePokemon}...`);

        const dadosPokemon = await buscarDadosPokemon(nomePokemon);
        console.log("Dados do Pokémon:", dadosPokemon);
    } catch (erro) {
        console.error("Ocorreu um erro:", erro.message);
    }
})();