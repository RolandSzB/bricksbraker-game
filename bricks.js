function initBricks() {
  const marginLeft = 30;
  const marginRight = 30;
  const bricksDistance = 15;
  const bricksZone = limitRight - marginLeft - marginRight;

  const bricksNumber = 6;
  const brickWidth = Math.round(bricksZone / bricksNumber) - bricksDistance;

  for (let i = 0; i < bricksNumber; i++) {
    bricks.push({
      color: "#1520a6",
      x: marginLeft + i * brickWidth + i * bricksDistance,
      y: 60,
      width: brickWidth,
      heigth: 20,
    });
  }
}

function showBricks() {
  for (let i = 0; i < bricks.length; i++) {
    fill(bricks[i].color);
    rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].heigth);
  }
}

function bricksCheck(smileFace) {
  for (let i = 0; i < bricks.length; i++) {
    if (
      bricks[i].x >= smileFace.x + smileFace.ray &&
      bricks[i].x <= smileFace.x - smileFace.ray &&
      bricks[i].y <= smileFace.y - smileFace.ray
    ) {
      return 1;
    }
  }
  return smileFace.sensY;
}
