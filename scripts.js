function jogar(escolha) {

    //escolhe um numero aleatorio até 3
    let sorteio = Math.floor(Math.random() * 3);
    let escolhaComputador = ''
    let placarJogador = document.getElementById('jogador').innerText
    let placarComput = document.getElementById('comput').innerText

    //muda a imagem de acordo com o sorteio
    switch (sorteio) {
        case 0:
            document.getElementById("pc").src = "img/pedra.jpg"
            escolhaComputador = "pedra"
            break
        case 1:
            document.getElementById("pc").src = "img/tesoura.jpg"
            escolhaComputador = "tesoura"
            break
        case 2:
            document.getElementById("pc").src = "img/papel.jpg"
            escolhaComputador = "papel"
            break
    }

    // determina qual o vencedor ou se deu empate
    if ((escolhaComputador === "pedra" && escolha === "pedra") ||
        (escolhaComputador === "papel" && escolha === "papel") ||
        (escolhaComputador === "tesoura" && escolha === "tesoura")) {
        document.getElementById("result").innerText = "Ixi, Empate"
    } else if ((escolhaComputador === "pedra" && escolha === "papel") ||
        (escolhaComputador === "papel" && escolha === "tesoura") ||
        (escolhaComputador === "tesoura" && escolha === "pedra")) {
        document.getElementById("result").innerText = "Você venceu! uhuuulll"
        placarJogador = parseInt(placarJogador) + 1
        document.getElementById('jogador').innerText = placarJogador
    } else {
        document.getElementById("result").innerText = "Você perdeu! Tente novamente."
            //incrementa 1 no placar do vencedor
        placarComput = parseInt(placarComput) + 1
        document.getElementById('comput').innerText = placarComput
    }
}

//Reset Game
function resetar() {
    document.getElementById('jogador').innerText = '0'
    document.getElementById('comput').innerText = '0'
    document.getElementById("pc").src = "img/vazio.jpg"
    document.getElementById("result").innerText = "Resultado..."
}