function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#00ffff");

  sensS2X = sensSmileFaceChecksX(moveS2X, rayS2, sensS2X);
  sensS2Y = sensSmileFaceChecksY(moveS2Y, rayS2, sensS2Y);

  SmileFaceRoli.sensX = sensSmileFaceChecksX(
    SmileFaceRoli.x,
    SmileFaceRoli.ray,
    SmileFaceRoli.sensX
  );
  SmileFaceRoli.sensY = sensSmileFaceChecksX(
    SmileFaceRoli.y,
    SmileFaceRoli.ray,
    SmileFaceRoli.sensY
  );

  SmileFaceRoli.x += SmileFaceRoli.sensX * SmileFaceRoli.speed;
  SmileFaceRoli.y += SmileFaceRoli.sensY * SmileFaceRoli.speed;

  moveS2X += sensS2X * speedS2;
  moveS2Y += sensS2Y * speedS2;

  smileFaceRoli(SmileFaceRoli.x, SmileFaceRoli.y, SmileFaceRoli.ray * 2);
  smileFaceJano(moveS2X, moveS2Y, rayS2 * 2);
}
