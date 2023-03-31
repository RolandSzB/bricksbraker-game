let moveS1X = 180;
let moveS1Y = 50;
let speedS1 = 10;
rayS1 = 50;
let moveS2X = 220;
let moveS2Y = 80;
let speedS2 = 15;
rayS2 = 50;

let sensS1X = 1;
let sensS1Y = 1;
let sensS2X = 1;
let sensS2Y = 1;

let limitTop = 0;
let limitBottom = 600;
let limitLeft = 0;
let limitRight = 600;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#00ffff");
  //verificare limmita Top S1
  if (moveS1Y < limitTop + rayS1) {
    sensS1Y = 1; //schimbare de sens
  }
  //verificare limmita Bottom S1
  if (moveS1Y > limitBottom - rayS1) {
    sensS1Y = -1; //schimbare de sens
  }
  //verificare limmita Left S1
  if (moveS1X < limitLeft + rayS1) {
    sensS1X = 1; //schimbare de sens
  }
  //verificare limmita Right S1
  if (moveS1X > limitRight - rayS1) {
    sensS1X = -1; //schimbare de sens
  }

  if (moveS2Y < limitTop + rayS2) {
    sensS2Y = 1; //schimbare de sens
  }
  //verificare limmita Bottom S1
  if (moveS2Y > limitBottom - rayS2) {
    sensS2Y = -1; //schimbare de sens
  }
  //verificare limmita Left S1
  if (moveS2X < limitLeft + rayS2) {
    sensS2X = 1; //schimbare de sens
  }
  //verificare limmita Right S1
  if (moveS2X > limitRight - rayS2) {
    sensS2X = -1; //schimbare de sens
  }

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y * speedS1;

  moveS2X += sensS2X * speedS2;
  moveS2Y += sensS2Y * speedS2;
  smileFaceRoli(moveS1X, moveS1Y, rayS1 * 2);
  smileFaceJano(moveS2X, moveS2Y, rayS2 * 2);
}

function smileFaceJano(x, y, d) {
  // skin
  fill("#fdda55");
  circle(x, y, d);

  // right eye
  fill("#000000");
  circle(x + 20, y - 10, 25);

  fill("ffffff");
  circle(x + 20, y - 10, 10);

  // left eye
  fill("ffffff");
  circle(x - 20, y - 10, 25);

  fill("#000000");
  circle(x - 20, y - 10, 10);

  // mouth
  fill("#000000");
  arc(x, y + 10, 30, 30, 0, Math.PI);

  fill("#ff0000");
  arc(x, y + 20, 15, 10, 0, Math.PI);

  //
  fill("#fdda55");
  arc(x, y - 60, 55, 10, Math.PI, 0);
}

function smileFaceRoli(x, y, d) {
  //skin
  fill("#00ff00");
  circle(x, y, d);

  //right eye
  fill("lightblue");
  circle(x + 20, y - 10, 15);
  fill("#000000");
  circle(x + 20, y - 10, 3);

  //left eye
  fill("lightblue");
  circle(x - 20, y - 10, 15);
  fill("#000000");
  circle(x - 20, y - 10, 3);

  //mouth
  noFill();
  arc(x, y + 30, 40, 15, 0, Math.PI);
}
