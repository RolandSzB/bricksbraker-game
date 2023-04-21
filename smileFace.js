function smileFaceJano(x, y, d) {
  // skin
  fill("#fdda55");
  circle(x, y, d);

  // right eye
  fill("#000000");
  circle(x + d * 0.2, y - d * 0.1, d * 0.25);

  fill("ffffff");
  circle(x + d * 0.2, y - d * 0.1, d * 0.1);

  // left eye
  fill("ffffff");
  circle(x - d * 0.2, y - d * 0.1, d * 0.25);

  fill("#000000");
  circle(x - d * 0.2, y - d * 0.1, d * 0.1);

  // mouth
  fill("#000000");
  arc(x + d * 0, y + d * 0.1, d * 0.3, d * 0.3, d * 0, Math.PI);

  fill("#ff0000");
  arc(x + d * 0, y + d * 0.2, d * 0.15, d * 0.1, d * 00, Math.PI);

  //
  fill("#fdda55");
  arc(x + d * 0, y - d * 0.6, d * 0.55, d * 0.1, Math.PI, d * 0);
}

function smileFaceRoli(x, y, d) {
  //skin
  fill("#00ff00");
  circle(x, y, d);

  //right eye
  fill("lightblue");
  circle(x + d * 0.2, y - d * 0.1, d * 0.15);
  fill("#000000");
  circle(x + d * 0.2, y - d * 0.1, d * 0.03);

  //left eye
  fill("lightblue");
  circle(x - d * 0.2, y - d * 0.1, d * 0.15);
  fill("#000000");
  circle(x - d * 0.2, y - d * 0.1, d * 0.03);

  //mouth
  noFill();
  arc(x + d * 0, y + d * 0.3, d * 0.4, d * 0.15, d * 0, Math.PI);
}
