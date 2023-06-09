function initBricks() {
  bricks = [];
  const marginLeft = 30;
  const marginRight = 30;
  const bricksDistance = 15;
  const bricksZone = limitRight - marginLeft - marginRight;

  const bricksNumber = 8;
  const brickWidth = Math.round(bricksZone / bricksNumber) - bricksDistance;

  for (let k = 1; k <= numberOfBricksRows; k++) {
    for (let i = 0; i < bricksNumber; i++) {
      bricks.push({
        color: "#1520a6",
        x: marginLeft + i * brickWidth + i * bricksDistance,
        y: k * 40,
        width: brickWidth,
        heigth: 20,
        // hit: false,
      });
    }
  }
  // for (let i = 0; i < bricksNumber; i++) {
  //   bricks.push({
  //     color: "#1520a6",
  //     x: marginLeft + i * brickWidth + i * bricksDistance,
  //     y: 80,
  //     width: brickWidth,
  //     heigth: 20,
  //     hit: false,
  //   });
  // }
}

function showBricks() {
  // for (let i = 0; i < bricks.length; i++) {
  //   if (bricks[i].hit) {
  //     fill("green");
  //   } else {
  //     fill(bricks[i].color);
  //   }
  //   rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].heigth);
  // }
  for (let i = 0; i < bricks.length; i++) {
    if (!bricks[i].hit) {
      fill(bricks[i].color);
      rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].heigth);
    }
  }
}

function bricksCheck(smileFace) {
  for (let i = 0; i < bricks.length; i++) {
    if (
      bricks[i].x <= smileFace.x + smileFace.ray &&
      bricks[i].x + bricks[i].width >= smileFace.x - smileFace.ray &&
      bricks[i].y <= smileFace.y + smileFace.ray &&
      bricks[i].y + bricks[i].heigth >= smileFace.y - smileFace.ray &&
      !bricks[i].hit
    ) {
      bricks.splice(i, 1);
      if (bricks.length == 0) {
        levelUp();
      }
      //bricks[i].hit = true;
      smileFace.speed += 0.5;
      return 1;
    }
  }
  return smileFace.sensY;
}
