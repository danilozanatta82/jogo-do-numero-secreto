let listaNumeroSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoTela("h1", "Descubra o Número Secreto");
    exibirTextoTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

   if(chute == numeroSecreto) {
    exibirTextoTela("h1", "ACERTOU!!");
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !!`; 
    exibirTextoTela("P", mensagemTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
   } else {
    if (chute > numeroSecreto) {
        exibirTextoTela("P", "O número secreto é menor.");
    } else {
        exibirTextoTela("P", "O número secreto é maior.");
    } 
    tentativas++;
    limparCampo();
   }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
    let quantidadeElementosLista = listaNumeroSorteados.length;

    if(quantidadeElementosLista == numerolimite) {
        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}