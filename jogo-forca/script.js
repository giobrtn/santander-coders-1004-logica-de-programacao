// Lista de palavras para o jogo
const listaPalavras = ['gato', 'cachorro', 'elefante', 'leao', 'tigre', 'girafa'];

// Escolhe uma palavra aleatória da lista
const indiceAleatorio = Math.floor(Math.random() * listaPalavras.length);
let palavraEscolhida = listaPalavras[indiceAleatorio];
let tentativas = palavraEscolhida.length;
// Converte a palavra em um array de letras
let arrayPalavra = palavraEscolhida.split('');

// Elementos HTML
const displayPalavra = document.getElementById('display-palavra');
let tentativasRestantes = document.getElementById('tentativas-restantes');
const entradaAdivinhacao = document.getElementById('entrada-adivinhacao');
const botaoAdivinhacao = document.getElementById('botao-adivinhacao');
const mensagem = document.getElementById('mensagem');
const botaoRecomecar = document.getElementById('botao-recomeçar');

tentativasRestantes.innerText = tentativas;
// Inicializa o display da palavra com underscores
let arrayExibicao = new Array(arrayPalavra.length).fill('_');
displayPalavra.textContent = arrayExibicao.join(' ');


// let tentativas = 6;

// Lidar com o botão de adivinha
botaoAdivinhacao.addEventListener('click', () => {
    const adivinhacao = entradaAdivinhacao.value.toLowerCase();

    // Verificar se a entrada é uma letra
    if (!/^[a-zA-Z]$/.test(adivinhacao)) {
        mensagem.textContent = 'Por favor, insira uma letra válida.';
        return;
    }

    // Verificar se a letra já foi adivinhada
    if (arrayExibicao.includes(adivinhacao)) {
        mensagem.textContent = 'Você já adivinhou essa letra.';
        return;
    }

    // Verificar se a letra está na palavra
    let encontrada = false;
    for (let i = 0; i < arrayPalavra.length; i++) {
        if (arrayPalavra[i] === adivinhacao) {
            arrayExibicao[i] = adivinhacao;
            encontrada = true;
        }
    }

    // Atualizar o display da palavra
    displayPalavra.textContent = arrayExibicao.join(' ');

    // Atualizar as tentativas restantes
    if (!encontrada) {
        tentativas--;
        tentativasRestantes.textContent = tentativas;

        if (tentativas === 0) {
            mensagem.textContent = 'Você perdeu! A palavra era: ' + palavraEscolhida;
            entradaAdivinhacao.disabled = true;
            botaoAdivinhacao.disabled = true;
        } else {
            mensagem.textContent = 'Tente novamente.';
        }
    } else if (arrayExibicao.join('') === palavraEscolhida) {
        mensagem.textContent = 'Parabéns! Você acertou a palavra!';
        entradaAdivinhacao.disabled = true;
        botaoAdivinhacao.disabled = true;
    } else {
        mensagem.textContent = 'Boa! Continue adivinhando.';
    }

    // Limpar a entrada
    entradaAdivinhacao.value = '';
});



botaoRecomecar.addEventListener('click', () => {
    location.reload();
});