function bottomBarCheck(smileFace) {
  if (
    smileFace.y + smileFace.ray >= BottomBar.bottomYPosition &&
    smileFace.y + smileFace.ray <= limitBottom &&
    smileFace.x + smileFace.ray >= mouseX - Math.round(BottomBar.width / 2) &&
    smileFace.x - smileFace.ray <= mouseX + Math.round(BottomBar.width / 2)
  ) {
    return -1;
  }

  return smileFace.sensY;
}

function bottomBar() {
  //color
  //fill(BottomBar.color);
  fill("red");
  rect(
    mouseX - Math.round(BottomBar.width / 2),
    BottomBar.bottomYPosition,
    BottomBar.width,
    BottomBar.height
  );
}
