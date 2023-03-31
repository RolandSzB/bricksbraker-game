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
