let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial();

function verificarChute(){
  let chute = document.querySelector('input').value;
    
  if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o númerosecreto com ${tentativas} ${palavraTentativas}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if (chute > numeroSecreto){
      exibirTextoNaTela('p', 'O numero secreto é menor!!!');
    }else{
      exibirTextoNaTela('p', 'O numero secreto é maior!!!');
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

  if(quantidadeDeElementosNaLista == 3){
    listaDeNumeroSorteado = [];
  }
  if(listaDeNumeroSorteado.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    listaDeNumeroSorteado.push(numeroEscolhido);
    console.log(listaDeNumeroSorteado);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
