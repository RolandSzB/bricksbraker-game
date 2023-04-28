function setup() {
  createCanvas(600, 600);
  initBricks();
}

function draw() {
  background("#00ffff");



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

  SmileFaceJano.sensY = bottomBarCheck(
   SmileFaceJano
  );

  SmileFaceJano.sensY = bricksCheck(
    SmileFaceJano
   );

  SmileFaceRoli.sensX = sensSmileFaceChecksX(
    SmileFaceRoli.x,
    SmileFaceRoli.ray,
    SmileFaceRoli.sensX
  );
  SmileFaceRoli.sensY = sensSmileFaceChecksY(
    SmileFaceRoli.y,
    SmileFaceRoli.ray,
    SmileFaceRoli.sensY
  );

  SmileFaceRoli.sensY = bottomBarCheck(
    SmileFaceRoli
   );

   SmileFaceRoli.sensY = bricksCheck(
    SmileFaceRoli
   );

  SmileFaceRoli.x += SmileFaceRoli.sensX * SmileFaceRoli.speed;
  SmileFaceRoli.y += SmileFaceRoli.sensY * SmileFaceRoli.speed;

  SmileFaceJano.x += SmileFaceJano.sensX * SmileFaceJano.speed;
  SmileFaceJano.y += SmileFaceJano.sensY * SmileFaceJano.speed;

  smileFaceJano(SmileFaceJano.x, SmileFaceJano.y, SmileFaceJano.ray * 2);
  smileFaceRoli(SmileFaceRoli.x, SmileFaceRoli.y, SmileFaceRoli.ray * 2);

  bottomBar();
  showBricks();
}
