function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#ff0000");
  smileFaceJano();
  background("#ff5555");
  smileFaceRoli();
}

function smileFaceJano() {
  // skin
  fill("#fdda55");
  circle(200, 200, 100);
  circle(x, y, 100);

  // right eye
  fill("#000000");
  circle(x + 220, y - 190, 25);
  circle(x + 220, y - 190, 25);

  fill("ffffff");
  circle(x + 220, y - 190, 10);
  circle(x + 220, y - 190, 10);

  // left eye
  fill("ffffff");
  circle(x + 180, y - 190, 25);
  circle(x + 180, y - 190, 25);

  fill("#000000");
  circle(x + 180, y - 190, 10);
  circle(x + 180, y - 190, 10);

  // mouth
  fill("#000000");
  arc(x + 200, y - 210, 30, 30, 0, Math.PI);

  fill("#ff0000");
  arc(x + 200, y - 220, 15, 10, 0, Math.PI);

  //
  fill("#fdda55");
  arc(x + 200, y - 140, 55, 10, Math.PI, 0);
}

function smileFaceRoli() {
  //skin
  fill("#00ff00");
  circle(200, 200, 100);

  //right eye
  fill("lightblue");
  circle(220, 190, 15);
  fill("#000000");
  circle(220, 190, 3);

  //left eye
  fill("lightblue");
  circle(180, 190, 15);
  fill("#000000");
  circle(180, 190, 3);

  //mouth
  noFill();
  arc(200, 230, 40, 15, 0, Math.PI);
}
