 const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sua cidade quer mudar a forma como produz energia. A prefeitura abre uma consulta pública para decidir entre investir em energia solar nos telhados públicos ou construir uma nova usina a carvão. Qual a sua opinião inicial?",
        alternativas: [
            { texto: "Apoiar a energia solar imediatamente!", afirmacao: "Defendeu fontes limpas desde o primeiro momento. " },
            { texto: "Manter o carvão por ser mais barato agora.", afirmacao: "Preferiu a segurança econômica de curto prazo. " }
        ]
    },
    {
        enunciado: "No seu bairro, o desperdício de água é alto. O conselho comunitário propõe criar um sistema de captação de chuva ou multar quem desperdiça. O que você escolhe fazer?",
        alternativas: [
            { texto: "Ajudar a montar o sistema de captação comunitário.", afirmacao: "Envolveu-se em ações práticas de sustentabilidade. " },
            { texto: "Exigir fiscalização rígida e multas.", afirmacao: "Acreditou mais em regras severas de controle. " }
        ]
    },
    {
        enunciado: "Para ir ao trabalho ou escola, você percebe que o transporte público é lotado e polui muito. Surge a chance de usar mais a bicicleta ou comprar um carro próprio elétrico. Qual caminho segue?",
        alternativas: [
            { texto: "Ir de bicicleta e cobrar ciclovias seguras.", afirmacao: "Adotou um estilo de vida com zero emissão de carbono. " },
            { texto: "Optar pelo carro elétrico individual.", afirmacao: "Buscou conforto pessoal aliado a uma tecnologia menos poluente. " }
        ]
    },
    {
        enunciado: "Chega o fim do ano e sua escola promove uma feira verde. O seu grupo precisa escolher um projeto para expor: reciclagem de lixo eletrônico ou plantio de hortas urbanas.",
        alternativas: [
            { texto: "Focar na reciclagem de lixo eletrônico.", afirmacao: "Alertou sobre os perigos dos metais pesados no lixo moderno. " },
            { texto: "Criar hortas urbanas orgânicas.", afirmacao: "Incentivou a produção local de alimentos saudáveis. " }
        ]
    },
    {
        enunciado: "Anos depois, sua comunidade se torna referência ecológica. Como você avalia sua trajetória?",
        alternativas: [
            { texto: "O esforço vale a pena para garantir o futuro da Terra.", afirmacao: "Tornou-se um guardião ativo do meio ambiente para as próximas gerações." },
            { texto: "Ainda há muito erro humano, mas o aprendizado continua.", afirmacao: "Compreendeu que cuidar do planeta é um trabalho diário e imperfeito." }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado Final - Seu Impacto em 2050:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
