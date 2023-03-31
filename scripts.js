function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#ff5555");
  smileFaceRoli();
  //smileFaceJano(85, 200);
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
  arc(200, 170, 40, 15, 0, Math.PI);
  background("#ff0000");
}

// function smileFaceJano(x, y) {
//   // skin
//   fill("#fdda55");

//   circle(x, y, 100);

//   // right eye
//   fill("#000000");
//   circle(x + 20, y - 10, 25);
//   circle(x + 20, y - 10, 25);

//   fill("ffffff");
//   circle(x + 20, y - 10, 10);
//   circle(x + 20, y - 10, 10);

//   // left eye
//   fill("ffffff");
//   circle(x - 20, y - 10, 25);
//   circle(x - 20, y - 10, 25);

//   fill("#000000");
//   circle(x - 20, y - 10, 10);
//   circle(x - 20, y - 10, 10);

//   // mouth
//   fill("#000000");
//   arc(x, y + 10, 30, 30, 0, Math.PI);

//   fill("#ff0000");
//   arc(x, y + 20, 15, 10, 0, Math.PI);

//   //
//   fill("#fdda55");
//   arc(x, y - 60, 55, 10, Math.PI, 0);
// }
