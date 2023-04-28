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

function sensSmileFaceChecksX(x, r, sensInitial) {
  // verificare limita LEFT
  if (x < limitLeft + r) {
    // schimbare de sens
    return 1;
  }

  // verificare limita RIGHT
  if (x > limitRight - r) {
    // schimbare de sens
    return -1;
  }

  return sensInitial;
}

function sensSmileFaceChecksY(y, r, sensInitial) {
  // verificare limita TOP
  if (y < limitTop + r) {
    // schimbare de sens
    return 1;
  }

  // verificare limita BOTTOM
  if (y > limitBottom - r) {
    // schimbare de sens
    return -1;
  }
  return sensInitial;
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

function sensSmileFaceChecksX(x, r, sensInitial) {
  if (x < limitLeft + r) {
    return 1;
  }
  if (x > limitRight - r) {
    return -1;
  }
  return sensInitial;
}
function sensSmileFaceChecksY(y, r, sensInitial) {
  if (y < limitTop + r) {
    return 1;
  }
  //if (y > limitBottom - r) {
  //  return -1;
 // }
  return sensInitial;
}
