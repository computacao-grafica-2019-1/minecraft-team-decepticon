let anguloDireito = 0;
let anguloEsquerdo = 0;


function draw() {
  createCanvas(500, 300);
  background(255);
  //Desenha Cabeça!
  push();
  translate(195, 60);
  rect(-25, -50, 50, 50);
  fill(0);
  circle(0,0,4);
  pop();
  
  //Desenha Tronco!
  push();
  translate(195, 10);
  rect(-40, 60, 80, 100);
  fill(0);
  circle(0,0,4);
  pop();
  
  //Desenha Braço D!
  push();
  translate(145, 87);
  rotate(radians(anguloDireito))
  rect(-80, -17, 80, 35);
  fill(0);
  circle(0,0,4);
  pop();
  
  //Desenha Braço E!
  push();
  translate(245, 87);
  rotate(radians(anguloEsquerdo))
  rect(0, -17, 80, 35);
  fill(0);
  circle(0,0,4);
  pop();
  
  //Desenha Perna D!
  push();
  translate(172, 180);
  rect(-17, 0, 35, 80);
  fill(0);
  circle(0,0,4);
  pop();
  
  //Desenha Perna E!
  push();
  translate(217, 180);
  rect(-17, 0, 35, 80);
  fill(0);
  circle(0,0,4);
  pop();

  text("Pressione a tecla E para levantar o braço esquerdo; tecla D para levantar o braço direito", 20, height - 5);
  


}

function keyPressed() {

  //Balança BD
  if (keyCode === 68 & anguloDireito == 0) {
    anguloDireito = 30;
  } else if (keyCode === 68 & anguloDireito == 30) {
    anguloDireito = 0;
  }
  //Balnça BE 
  if (keyCode === 69 & anguloEsquerdo == 0) {
    anguloEsquerdo = -30;
  } else if (keyCode === 69 & anguloEsquerdo == -30) {
    anguloEsquerdo = 0;
  }

}