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
    let frameBit = [];
    let interacoes = 0;

    // frameBit são os frames junto com o bit de referência de cada página
    for (let i = 0; i < situacaoFrame.length; i++) {
        frameBit.push([situacaoFrame[i], 0]);
    }

    while (alocacoes.length > 0) {
        loop1: for (let j = 0; j < situacaoFrame.length; j++) {
            if (!alocacoes[0]) {
                break;
            }

            troca = false;

            // Loop que verifica se a próxima página da sequência já está alocada, se estiver, muda o bit para 1, exibe a situação do frame e elimina a página da sequência, por fim, passa o ponteiro quebrando o loop 1
            loop2: for (let x = 0; x < situacaoFrame.length; x++) {
                if (situacaoFrame[x] == alocacoes[0]) {
                    frameBit[x][1] = 1;
                    console.log(alocacoes[0], troca, situacaoFrame);
                    alocacoes.shift();
                    break loop1;
                }
            }

            // Se o bit de referência for 1, o bit se torna 0 dando uma "segunda chance" para a página.
            if (frameBit[j][1] == 1) {
                frameBit[j][1] = 0;
            } else {
                // Se houver a troca, incrementa a quantidade de trocas
                if (situacaoFrame[j] == 0) {
                    troca = false;
                } else {
                    troca = true;
                    qtdTrocas++;
                }

                // O frame no indíce atual recebe o primeiro valor sequência de alocações
                situacaoFrame[j] = alocacoes[0];
                frameBit[j][0] = alocacoes[0];

                // Como a página é lida, logo o bit de referência se torna 1
                frameBit[j][1] = 1;

                console.log(alocacoes[0], troca, situacaoFrame);

                // Remove o número utilizado da sequência de alocações
                alocacoes.shift();
            }
            interacoes++;
        }
    }
    console.log('andadas do ponteiro: ' + interacoes);

    return `Programa finalizado com ${qtdTrocas} trocas de páginas.`;
}

alocarFrames(3, "1,2,3,4,2,3,5,2,1");