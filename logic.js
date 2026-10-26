let pokebola = document.getElementById("pokebola");
let area = document.getElementById("area");

let posY = 0;
let posX = 0;
let direcaoY = 1;
let direcaoX = 1;
let velocidade = 4;
let animacao; 

function posicaoAleatoria(){
    /* calculando posição inicial aleatória dentro dos limites */
    let maxX = area.clientWidth - pokebola.clientWidth;
    let maxY = area.clientHeight - pokebola.clientHeight;

    posX = Math.random() * maxX;
    posY = Math.random() * maxY;

    pokebola.style.left = posX + "px";
    pokebola.style.top = posY + "px"; 
}

function moverImagem(){
    posX += velocidade * direcaoX;
    posY += velocidade * direcaoY;

    // Limites máximos
    let maxX = area.clientWidth - pokebola.clientWidth;
    let maxY = area.clientHeight - pokebola.clientHeight;

    // Colisão vertical (Cima / Baixo)
    if (posY >= maxY) {
        posY = maxY; // Ajusta para não ultrapassar
        direcaoY = -1;
    } else if (posY <= 0) {
        posY = 0; // Ajusta para não ultrapassar
        direcaoY = 1;
    }

    // Colisão horizontal (Esquerda / Direita)
    if (posX >= maxX) {
        posX = maxX; // Ajusta para não ultrapassar
        direcaoX = -1;
    } else if (posX <= 0) {
        posX = 0; // Ajusta para não ultrapassar
        direcaoX = 1;
    }

    // Aplica a posição atualizada no CSS
    pokebola.style.left = posX + "px";
    pokebola.style.top = posY + "px";

    animacao = requestAnimationFrame(moverImagem);
}

function iniciar(){
    cancelAnimationFrame(animacao);
    posicaoAleatoria();
    moverImagem();
}

function pausar(){
    cancelAnimationFrame(animacao);
}

function mudarImagem(){
    const imagens = [
        /*array é um conjunto de valores dentro de uma mesma variavel*/
        "./images/charmander.gif",
        "./images/pikachu.gif",
        "./images/squirtle.gif",
        "./images/mew.gif",
        "./images/butterfree.gif",
        "./images/gengar.gif",
        "./images/raichu.gif",
        "./images/zapdos.gif",
        "./images/snorlax.gif",
        "./images/charizard.gif"
    ];

    const sorteada = imagens[Math.floor(Math.random() * imagens.length)];
    pokebola.src = sorteada;
}
