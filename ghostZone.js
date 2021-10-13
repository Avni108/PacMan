function GhostZone(){    
if(PacMan.isTouching(blinky) || PacMan.isTouching(inky) || PacMan.isTouching(clyde) || PacMan.isTouching(pinky)){
   background("white"); 
   PacMan.x = 500;
   PacMan.y = 460;
   PacMan.velocityX = 0;
   PacMan.velocityY = 0; 

}
    
}