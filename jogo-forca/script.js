// Lista de palavras para o jogo
const listaPalavras = ['gato', 'cachorro', 'elefante', 'leao', 'tigre', 'girafa'];
let letrasTentadas = [];

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

// Inicializa o valor no HTML de tentaitvas restantes
tentativasRestantes.innerText = tentativas;

// Inicializa o display da palavra com underscores
let arrayExibicao = new Array(arrayPalavra.length).fill('_');
displayPalavra.textContent = arrayExibicao.join(' ');

// Função de verificação
function verificar(adivinhacao) {
    // Verificar se a entrada é uma letra
    if (!/^[a-zA-Z]$/.test(adivinhacao)) {
        return [-1, 'Por favor, insira uma letra válida.'];
    }

    // Verificar se a letra já foi adivinhada
    if (letrasTentadas.includes(adivinhacao)) {
        return [-1, 'Você já adivinhou/tentou essa letra.'];
    }
    letrasTentadas.push(adivinhacao)

    // Verificar se a letra está na palavra
    let changed = false
    for (let i = 0; i < arrayPalavra.length; i++) {
        if (arrayPalavra[i] === adivinhacao) {
            arrayExibicao[i] = adivinhacao;
            changed = true;
        }
    }
    console.log(arrayExibicao)
    return [changed, changed ? 'Boa! Continue adivinhando.' : 'Tente novamente.'];
}

// Função de processar tentativa
function processarTentativa(msg) {
    tentativas--;
    tentativasRestantes.textContent = tentativas;

    if (tentativas === 0) {
        msg = 'Você perdeu! A palavra era: ' + palavraEscolhida;
        entradaAdivinhacao.disabled = true;
        botaoAdivinhacao.disabled = true;
    }

    if (arrayExibicao.join('') === palavraEscolhida) {
        msg = 'Parabéns! Você acertou a palavra!';
        entradaAdivinhacao.disabled = true;
        botaoAdivinhacao.disabled = true;
    }

    return msg;
}

// Função de adivinhar
function adivinhar() {
    const adivinhacao = entradaAdivinhacao.value.toLowerCase();
    // Limpar a entrada
    entradaAdivinhacao.value = '';

    // Atualizar as tentativas restantes
    let result = verificar(adivinhacao)

    // Atualizar o display da palavra
    displayPalavra.textContent = arrayExibicao.join(' ');

    const letrasTentadasDisplay = letrasTentadas.join(', ');
    document.getElementById('letras-tentadas').textContent = `Letras tentadas: ${letrasTentadasDisplay}`;

    if (result[0] == -1) {
        mensagem.textContent = result[1];
        return
    }
    result[1] = processarTentativa(result[1])
    mensagem.textContent = result[1];   
}
