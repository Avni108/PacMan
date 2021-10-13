function PacManControl(){

if (keyWentDown("right")) {
    PacMan.setSpeedAndDirection(6,360);
    PacMan.rotation = 180;
  }
  if (keyWentDown("left")) {
    PacMan.setSpeedAndDirection(6,180);
    PacMan.rotation = 360;
  }
  if (keyWentDown("up")) {
    PacMan.setSpeedAndDirection(6,270);
    PacMan.rotation = 90;
  }
  if (keyWentDown("down")) {
    PacMan.setSpeedAndDirection(6,90);
    PacMan.rotation = 270;
  }
  
}  