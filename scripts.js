function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#ff5555");
  smileFaceRoli(200, 200);
}

function smileFaceRoli(x, y) {
  //skin
  fill("#00ff00");
  circle(x, y, 100);

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
