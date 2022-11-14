//variáveis da bolinha:
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

//variáveis velocidade da bolinha:
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raio = diametro / 2;

//variáveis Raquete:
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//variáveis Raquete oponente:
let xRaqueteOp = 587;
let yRaqueteOp = 150;
let velocidadeYOp;

//placar do jogo
let meusPontos = 0;
let oponentePontos = 0;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);

}

function velocidadeBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificacaoColisao(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha - raio < 0 || yBolinha + raio > height){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
    rect(x, y, larguraRaquete, alturaRaquete);

}

function movRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaqueteOp(){
  if (xBolinha + raio > xRaqueteOp && yBolinha - raio < yRaqueteOp + alturaRaquete && yBolinha + raio > yRaqueteOp){
    velocidadeXBolinha *= -1;
  }
}

//Para a colisão raquete, pode-se usar:
//function colisaoRaqueteMinhaBiblioteca(x, y){
//  colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
//  if (colidiu){
//    velocidadeXBolinha *= -1;
//  }
//}
// e na função draw, chamar:
//colisãoRaqueteMinhaBiblioteca (xRaquete, yRaquete);
//colisaoRaqueteMinhaBiblioteca (xRaqueteOp, yRaqueteOp);

//function colisaoRaqueteMinhaBiblioteca(){
//  colidiu = collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
//  if (colidiu){
//    velocidadeXBolinha *= -1;
//  }
//}

//function mostraRaqueteOp(){
//  rect(xRaqueteOp, yRaqueteOp, larguraRaquete, alturaRaquete)
//}

function movimentaRaqueteOp(){
  velocidadeYOp = yBolinha - yRaqueteOp - alturaRaquete / 2 - 40;
  yRaqueteOp += velocidadeYOp;
}

function incluiPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(oponentePontos, 321, 26);
}

function marcaPonto(){
  if (xBolinha > 592){
    meusPontos += 1;
  }
  if (xBolinha < 7){
    oponentePontos += 1;
  }
}

function draw() {
  background(0);
  mostraBolinha();
  velocidadeBolinha();
  verificacaoColisao();
  mostraRaquete(xRaquete, yRaquete);
  movRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOp();
  //verificaColisaoRaqueteOp();
  //colisaoRaqueteMinhaBiblioteca();
  mostraRaquete(xRaqueteOp, yRaqueteOp);
  movimentaRaqueteOp();
  incluiPlacar();
  marcaPonto();
}

