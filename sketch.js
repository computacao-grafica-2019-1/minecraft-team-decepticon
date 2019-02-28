armAngle = 0;
angleChange = 5;
final = ANGLE_LIMIT = 135;
tela = 'direito'

function setup()
{
  createCanvas(200, 200);
  smooth();
  frameRate(30);
}

function keyTyped() {
	if (key == 'e') {
		tela = 'esquerdo';
	} else if (key == 'd') {
		tela = 'direito';
}
}

function draw()
{
  background(255);
  push();
  translate(50, 50); // place robot so arms are always on screen
  drawRobot();
  armAngle += angleChange;
  
  
  // if the arm has moved past its limit,
  // reverse direction and set within limits.
  if (armAngle > ANGLE_LIMIT || armAngle < 0)
  {
    angleChange = -angleChange;
    armAngle += angleChange;
  }
  pop();
}

function drawRobot()
{
  noStroke();
  fill(38, 38, 200);
  rect(20, 0, 38, 30); // head
  rect(14, 32, 50, 50); // body
  drawLeftArm();
  drawRightArm();
  pop()
  drawPernaDireita();
  
  // fill(222, 222, 249);
  // ellipse(30, 12, 12, 12); // left eye
  // ellipse(47, 12, 12, 12);  // right eye
}

function drawLeftArm()
{
  push();
  translate(8, 38);
  rotate(radians(armAngle));
  rect(-8, 0, 12, 37); // left arm
  pop();
}

function drawRightArm()
{
  push();
  translate(70, 38);
  rotate(radians(-armAngle));
  rect(-4, 0, 12, 37); // braco direito arm
  pop();
}
function drawPernaDireita(){
  translate(90,135)
	rect(0, 0, 16, 50);
}
function drawPernaEsquerda(){
	rect(22, 84, 16, 50); // left leg
}