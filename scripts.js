function reset() {
  numberOfBricksRows = 1;
  initBricks();
  SmileFaceRoli.x = 300;
  SmileFaceRoli.y = 500;
  SmileFaceRoli.speed = 2;
  SmileFaceRoli.speed = 2;
  SmileFaceRoli.sensX = -1;
  SmileFaceRoli.sensY = -1;

  SmileFaceJano.x = 300;
  SmileFaceJano.y = 500;
  SmileFaceJano.speed = 2;
  SmileFaceJano.sensX = 1;
  SmileFaceJano.sensY = -1;
}

function levelUp() {
  if (numberOfBricksRows < 5) numberOfBricksRows++;
  initBricks();
}
function levelDown() {
  if (numberOfBricksRows > 1) numberOfBricksRows--;
  initBricks();
}

function setup() {
  createCanvas(600, 600);
  initBricks();
}

function draw() {
  background("#00ffff");
  fill("red");
  text(`Speed Roli: ${SmileFaceRoli.speed} `, 20, 20);
  text(`Speed Jano: ${SmileFaceJano.speed} `, 150, 20);
  text(`Number of rows: ${numberOfBricksRows} `, 300, 20);

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

  SmileFaceJano.sensY = bottomBarCheck(SmileFaceJano);
  SmileFaceJano.sensY = bricksCheck(SmileFaceJano);

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

  SmileFaceRoli.sensY = bottomBarCheck(SmileFaceRoli);
  SmileFaceRoli.sensY = bricksCheck(SmileFaceRoli);

  SmileFaceRoli.x += SmileFaceRoli.sensX * SmileFaceRoli.speed;
  SmileFaceRoli.y += SmileFaceRoli.sensY * SmileFaceRoli.speed;

  SmileFaceJano.x += SmileFaceJano.sensX * SmileFaceJano.speed;
  SmileFaceJano.y += SmileFaceJano.sensY * SmileFaceJano.speed;

  smileFaceJano(SmileFaceJano.x, SmileFaceJano.y, SmileFaceJano.ray * 2);
  smileFaceRoli(SmileFaceRoli.x, SmileFaceRoli.y, SmileFaceRoli.ray * 2);

  bottomBar();
  showBricks();
}
