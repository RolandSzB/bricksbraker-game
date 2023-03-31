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
