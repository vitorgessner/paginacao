// Função que cria o array com os frames
function criaFrames(frames) {
    let situacaoFrame = [];

    for (let i = 0; i < frames; i++) {
        situacaoFrame.push(0);
    }

    return situacaoFrame;
}

// Função que recebe a sequência de números como string e transforma em números
function alocarPaginas(numeros) {
    let alocacoes = [];
    for (numero of numeros) {
        if (numero === ",") {
            continue;
        }
        alocacoes.push(parseInt(numero));
    }
    return alocacoes;
}

// Função que imprime o número da página lida, as trocas e como os frames se encontram no momento
function alocarFrames(frames, sequencia) {
    let situacaoFrame = criaFrames(frames);
    let alocacoes = alocarPaginas(sequencia);
    let troca;
    let qtdTrocas = 0;

    for (let i = 0; i < alocacoes.length; i++) {
        let aleatorio = Math.floor(Math.random() * situacaoFrame.length)
        troca = false

        for (let j = 0; j < situacaoFrame.length; j++) {
            if (situacaoFrame[j] == 0) {
                situacaoFrame[j] = alocacoes[i]
                break
            }
        }

        troca = situacaoFrame.every(item => item != alocacoes[i])

        if (troca) {

            situacaoFrame[aleatorio] = alocacoes[i]
            qtdTrocas++
        }
        console.log(alocacoes[i], troca, situacaoFrame, aleatorio)
    }



    return console.log(`Programa finalizado com ${qtdTrocas} trocas de páginas.`)

}

alocarFrames(3, "1,2,3,4,2,3,5,2,1");