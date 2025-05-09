function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNunumeroAleatorio(de, ate);
        while(sorteados.includes(numero)) {
            numero = obterNunumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
//    alterarBotao();
}
//    function alterarBotao() {
//        
//    }

    function obterNunumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

    function novoJogo(){
    numero = gerarNumeroAleatorio();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }