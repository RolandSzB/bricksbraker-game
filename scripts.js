function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#00ffff");

  sensS1X = sensSmileFaceChecksX(moveS1X, rayS1, sensS1X);
  sensS1Y = sensSmileFaceChecksX(moveS1Y, rayS1, sensS1Y);

  SmileFaceJano.sensX = sensSmileFaceChecksX(
    SmileFaceJano.x,
    SmileFaceJano.ray,
    SmileFaceJano.sensX
  );
  SmileFaceJano.sensY = sensSmileFaceChecksY(
    SmileFaceJano.y,
    SmileFaceJano.ray,
    SmileFaceJano.sensY
  );

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y * speedS1;

  SmileFaceJano.x += SmileFaceJano.sensX * SmileFaceJano.speed;
  SmileFaceJano.y += SmileFaceJano.sensY * SmileFaceJano.speed;

  smileFaceRoli(moveS1X, moveS1Y, rayS1 * 2);
  smileFaceJano(SmileFaceJano.x, SmileFaceJano.y, SmileFaceJano.ray * 2);
}
