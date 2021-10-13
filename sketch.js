var bg;
var PacText, PacTextImg;
var gameState = "serve";
var Play, PlayImg;
var rules, rulesImg;
var level, levelImg;
var rulesBg;
var border1, border2, border3, border4;
var level1Img, level1,level2Img,level2,level3Img,level3;
var level1Bg;
var brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12, brick13, brick14, brick15brick16, brick17, brick18, brick19, brick20, brick21, brick22, brick23, brick24, brick25, brick26, brick27;
var blinky, blinkyImg, inky, inkyImg, clyde, clydeImg, pinky, pinkyImg;
var beginningSound;
var score = 0;
var PacMan, PacManImg;
var direction;
var lock1,lock1Img,lock2,lock2Img;
var level2ImgBg,level2Bg;
var dots;
var coin;
var pills =[];
//var pills = Group();
var TotDots = 0;
var EatDots = 0;
var booster1,booster1Img,booster2,booster2Img,booster3,booster3Img,booster4,booster4Img;
var eatingfruit;
var lives = 5;
var heart1,heart1Img,heart2,heart2Img,heart3,heart3Img,heart4,heart4Img,heart5,heart5Img;

function preload() {

    bg = loadImage("Background.jpg");

    booster1Img = loadImage("cherry.png");

    booster2Img = loadImage("strawberry.png");

    booster3Img = loadImage("apple.png");

    booster4Img = loadImage("mango.png");

    heart1Img = loadImage("heart.png");

    heart2Img = loadImage("heart.png");

    heart3Img = loadImage("heart.png");

    heart4Img = loadImage("heart.png");

    heart5Img = loadImage("heart.png");

    lock1Img = loadImage("Lock.png");

    coin = loadImage("Coin.png");

    level2ImgBg = loadImage("level2 MazeImg.png");

    lock2Img = loadImage("Lock.png");

    PacTextImg = loadImage("PacText.png");

    eatingfruit = loadSound("pacman_eatfruit.wav");

    PlayImg = loadImage("Play.png");

    rulesImg = loadImage("Rules.png");

    levelImg = loadImage("Levels.png");

    rulesBg = loadImage("rulesBg.jpg");

    level1Img = loadImage("Level 1Img.png");

    level1Bg = loadImage("level1Bg.png");

    level2Img = loadImage("level 2Img.png");

    level3Img = loadImage("level 3Img.png");

    blinkyImg = loadImage("Blinky.png");

    inkyImg = loadImage("Inky.png");

    clydeImg = loadImage("Clyde.png");

    pinkyImg = loadImage("Pinky.png");

    beginningSound = loadSound("pacman_beginning.wav");

    PacManImg = loadImage("PacMan.png");


}

function setup() {
    createCanvas(1000, 600);

    PacText = createSprite(500, 100, 20, 20);
    PacText.addImage(PacTextImg);
    PacText.scale = 1;

    Play = createSprite(520, 360, 20, 20);
    Play.addImage(PlayImg);
    Play.scale = 0.8;

    level2Bg = createSprite(500,300,20,20);
    level2Bg.addImage(level2ImgBg);
    level2Bg.scale = -0.9;
    level2Bg.visible = false;

    lock1 = createSprite(455,300,20,20);
    lock1.addImage(lock1Img);
    lock1.scale = 0.4;
    lock1.visible = false;

    lock2 = createSprite(600,300,20,20);
    lock2.addImage(lock2Img);
    lock2.scale = 0.4;
    lock2.visible = false;

    rules = createSprite(440, 430, 20, 20);
    rules.addImage(rulesImg);
    rules.scale = 0.4;

    level = createSprite(600, 430, 20, 20);
    level.addImage(levelImg);
    level.scale = 0.4;

    level1 = createSprite(300, 300, 20, 20);
    level1.addImage(level1Img);
    level1.scale = 0.7;
    level1.visible = false;

    level2 = createSprite(450, 300, 20, 20);
    level2.addImage(level2Img);
    level2.scale = 0.3;
    level2.visible = false;

    level3 = createSprite(600, 300, 20, 20);
    level3.addImage(level3Img);
    level3.scale = 0.3;
    level3.visible = false;

    border1 = createSprite(100, 320, 10, 300);
    border1.visible = false;
    border1.shapeColor = "white";

    border2 = createSprite(500, 170, 800, 10);
    border2.visible = false;
    border2.shapeColor = "white";

    border3 = createSprite(900, 320, 10, 300);
    border3.visible = false;
    border3.shapeColor = "white";

    border4 = createSprite(500, 470, 800, 10);
    border4.visible = false;
    border4.shapeColor = "white";

    brick1 = createSprite(495, 40, 923, 10);
    brick1.visible = false;
    brick1.shapeColor = "red";

    brick2 = createSprite(40, 270, 15, 458);
    brick2.visible = false;
    brick2.shapeColor = "blue";

    brick3 = createSprite(495, 503, 923, 10);
    brick3.visible = false;
    brick3.shapeColor = "red";

    brick4 = createSprite(955, 270, 15, 468);
    brick4.visible = false;
    brick4.shapeColor = "blue";

    brick5 = createSprite(497, 133, 255, 15);
    brick5.visible = false;
    brick5.shapeColor = "lightBlue";

    brick6 = createSprite(280, 90, 15, 100);
    brick6.visible = false;
    brick6.shapeColor = "lightBlue";

    brick7 = createSprite(715, 90, 15, 100);
    brick7.visible = false;
    brick7.shapeColor = "lightBlue";

    brick8 = createSprite(280, 450, 15, 100);
    brick8.visible = false;
    brick8.shapeColor = "lightBlue";

    brick9 = createSprite(715, 450, 15, 100);
    brick9.visible = false;
    brick9.shapeColor = "lightBlue";

    brick10 = createSprite(260, 225, 70, 10);
    brick10.visible = false;
    brick10.shapeColor = "lightBlue";

    brick11 = createSprite(260, 317, 70, 10);
    brick11.visible = false;
    brick11.shapeColor = "lightBlue";

    brick12 = createSprite(735, 225, 70, 10);
    brick12.visible = false;
    brick12.shapeColor = "lightBlue";

    brick13 = createSprite(495, 410, 265, 15);
    brick13.visible = false;
    brick13.shapeColor = "lightBlue";

    brick14 = createSprite(858, 180, 15, 100);
    brick14.visible = false;
    brick14.shapeColor = "lightBlue";

    brick15 = createSprite(835, 132, 60, 15);
    brick15.visible = false;
    brick15.shapeColor = "lightBlue";

    brick16 = createSprite(137, 180, 15, 100);
    brick16.visible = false;
    brick16.shapeColor = "lightBlue";

    brick17 = createSprite(160, 130, 60, 15);
    brick17.visible = false;
    brick17.shapeColor = "lightBlue";

    brick18 = createSprite(137, 360, 15, 100);
    brick18.visible = false;
    brick18.shapeColor = "lightBlue";

    brick19 = createSprite(160, 410, 60, 15);
    brick19.visible = false;
    brick19.shapeColor = "lightBlue";

    brick20 = createSprite(858, 360, 15, 100);
    brick20.visible = false;
    brick20.shapeColor = "lightBlue";

    brick21 = createSprite(835, 410, 60, 15);
    brick21.visible = false;
    brick21.shapeColor = "lightBlue";

    brick22 = createSprite(735, 317, 75, 10);
    brick22.visible = false;
    brick22.shapeColor = "lightBlue";

    brick23 = createSprite(495, 317, 240, 10);
    brick23.visible = false;
    brick23.shapeColor = "lightBlue";

    brick24 = createSprite(378, 270, 10, 100);
    brick24.visible = false;
    brick24.shapeColor = "lightBlue";

    brick25 = createSprite(618, 270, 10, 100);
    brick25.visible = false;
    brick25.shapeColor = "lightBlue";

    brick26 = createSprite(595, 225, 60, 10);
    brick26.visible = false;
    brick26.shapeColor = "lightBlue";

    brick27 = createSprite(400, 225, 60, 10);
    brick27.visible = false;
    brick27.shapeColor = "lightBlue";

    blinky = createSprite(400, 380, 20, 20);
    blinky.addImage(blinkyImg);
    blinky.scale = 0.1;
    blinky.visible = false;
    blinky.velocityY = -5;

    inky = createSprite(630, 290, 20, 20);
    inky.addImage(inkyImg);
    inky.scale = 0.1;
    inky.visible = false;
    inky.velocityY = -2;

    clyde = createSprite(400, 170, 20, 20);
    clyde.addImage(clydeImg);
    clyde.scale = 0.2;
    clyde.visible = false;
    clyde.velocityX = 3;

    pinky = createSprite(660,290, 20, 20);
    pinky.addImage(pinkyImg);
    pinky.scale = 0.1;
    pinky.visible = false;
    pinky.velocityY = -3;

    PacMan = createSprite(500, 460, 20, 20);
    PacMan.addImage(PacManImg);
    PacMan.scale = 0.3;
    PacMan.visible = false;

    booster1 = createSprite(85,450,20,20);//cherry
    booster1.addImage(booster1Img);
    booster1.scale = 0.15;
    booster1.visible = false;

    booster2 = createSprite(915,80,20,20);//strawberry
    booster2.addImage(booster2Img);
    booster2.scale = 0.35;
    booster2.visible = false;

    booster3 = createSprite(80,80,20,20);//apple
    booster3.addImage(booster3Img);
    booster3.scale = 0.3;
    booster3.visible = false;

    booster4 = createSprite(915,450,20,20);//mango
    booster4.addImage(booster4Img);
    booster4.scale = 0.3;
    booster4.visible = false;

    heart1 = createSprite(300,545,20,20);
    heart1.addImage(heart1Img);
    heart1.scale = 0.1;
    heart1.visible = false;

    heart2 = createSprite(350,545,20,20);
    heart2.addImage(heart2Img);
    heart2.scale = 0.1;
    heart2.visible = false;

    heart3 = createSprite(400,545,20,20);
    heart3.addImage(heart3Img);
    heart3.scale = 0.1;
    heart3.visible = false;

    heart4 = createSprite(450,545,20,20);
    heart4.addImage(heart4Img);
    heart4.scale = 0.1;
    heart4.visible = false;

    heart5 = createSprite(500,545,20,20);
    heart5.addImage(heart5Img);
    heart5.scale = 0.1;
    heart5.visible = false;
}

function draw() {

    //background("black");
    if(EatDots < 117){

    if (gameState === "serve") {
        background(bg);
    }

    if (mousePressedOver(rules) && gameState === "serve") {
        background("black");
        gameState = "rules";
        fill("red");
        textSize(100);
        stroke("yellow");
        text("KNOW THE RULES!! ", 25, 100);
        textSize(17);
        fill("white");
        stroke("red");
        text("1) YOU CAN CHOOSE ANY LEVEL YOU WANT BY CLICKING ON THE LEVEL BUTTON DISPLAYED IN THE HOME SCREEN ", 10, 200);
        text("2) YOU CAN CONTROL PACMAN WITH THE ARROW KEYS",10,240);
        PacText.visible = false;
        Play.visible = false;
        rules.visible = false;
        level.visible = false;
    }

    if (mousePressedOver(level) && gameState === "serve") {
        background("black");
        border1.visible = true;
        border2.visible = true;
        border3.visible = true;
        border4.visible = true;
        lock1.visible = true;
        lock2.visible = true;
        level1.visible = true; 
        level2.visible = true;
        level3.visible = true; 
        gameState = "level";
        textSize(90);
        fill("red");
        stroke("blue");
        text("CHOOSE YOUR LEVEL ", 10, 100);
        PacText.destroy();
        Play.destroy();
        rules.destroy();
        level.destroy();
    }

    if (mousePressedOver(level1) && gameState === "level") { 
        createdotsx(23,60,70);
        createdotsx(17,165,176);
        createdotsx(8,60,270);
        createdotsx(8,640,270);
        createdotsx(18,160,360);
        createdotsx(6,65,460);
        createdotsx(11,300,460);
        createdotsx(6,740,460);
        createdotsy(10,80,70);
        createdotsy(10,900,70);
        Level1();
        createdotsx();
        createdotsy();
        gameState = "level1";
    }

    if(gameState === "level1"){
        background("black");
        fill("yellow"); 
        textSize(20);
        text("Score: " + score, 100, 550);
    }

    if(mousePressedOver(level2) && gameState === "level"){
        beginningSound.play(); 
        background("black");
        Boxdestroy();
        Level2();
        level2Bg.visible = true;
        text("Score: " + score, 100, 550);
        
    }

    if(PacMan.isTouching(blinky) || PacMan.isTouching(inky) || PacMan.isTouching(clyde) || PacMan.isTouching(pinky)){
       GhostZone();
       score = score-10; 
       lives = lives-1; 
       heartLives();
    }

    function heartLives() {
        if (lives == 4) {
          heart1.visible = false;
        }
        if (lives == 3) {
          heart2.visible = false;
        }
        if (lives == 2) {
          heart3.visible = false;
        }
        if (lives == 1) {
          heart4.visible = false;
        }
        if(lives == 0){
          heart5.visible = false; 
          fill("red");
          textSize(30);
          text("Sorry you Lost!! ",395,280);
          blinky.visible = false;
          clyde.visible = false;
          inky.visible = false;
          pinky.visible = false;
        }
    }

    if (pinky.x<PacMan.x) {
      pinky.setSpeedAndDirection(5, 120);
    }

    if (pinky.x>PacMan.x) {
      pinky.setSpeedAndDirection(-5, 120);
    }

    if (pinky.y<PacMan.y) {
      pinky.setSpeedAndDirection(5, 120);
    }

    if (pinky.y>PacMan.y) {
      pinky.setSpeedAndDirection(-5, 120);
    }

    if(inky.x<PacMan.x) {
      inky.setSpeedAndDirection(5, 120);
    }

    if(inky.x>PacMan.x) {
      inky.setSpeedAndDirection(-5, 120);
    }

    if(inky.y<PacMan.y) {
      inky.setSpeedAndDirection(5, 120);
    }

    if(inky.y>PacMan.y) {
      inky.setSpeedAndDirection(-5, 120);
    }
    
    if (clyde.x<PacMan.x) {
      clyde.setSpeedAndDirection(5, 120);
    }

    if (clyde.x>PacMan.x) {
      clyde.setSpeedAndDirection(-5, 120);
    }

    if (clyde.y<PacMan.y) {
      clyde.setSpeedAndDirection(5, 120);
    }

    if (clyde.y>PacMan.y) {
      clyde.setSpeedAndDirection(-5, 120);
    }

    if(blinky.x<PacMan.x) {
      blinky.setSpeedAndDirection(5, 120);
    }

    if(blinky.x>PacMan.x) {
      blinky.setSpeedAndDirection(-5, 120);
    }

    if(blinky.y<PacMan.y) {
      blinky.setSpeedAndDirection(5, 120);
    }

    if (blinky.y>PacMan.y) {
      blinky.setSpeedAndDirection(-5, 120);
    }

    lock1.depth = lock1.depth+1;
    lock2.depth = lock2.depth+1;
    PacMan.depth = PacMan.depth+1;
    blinky.depth = blinky.depth+1;
    clyde.depth = clyde.depth+1;
    inky.depth = inky.depth=1;
    pinky.depth = pinky.depth+1;
    booster1.depth = booster1.depth+1;
    booster2.depth = booster2.depth+1;
    booster3.depth = booster3.depth+1;
    booster4.depth = booster4.depth+1;

  PacMan.collide(brick1);
  PacMan.collide(brick2);
  PacMan.collide(brick3);
  PacMan.collide(brick4);
  PacMan.collide(brick5);
  PacMan.collide(brick6);
  PacMan.collide(brick7);
  PacMan.collide(brick8);
  PacMan.collide(brick9);
  PacMan.collide(brick10);
  PacMan.collide(brick11);
  PacMan.collide(brick12);
  PacMan.collide(brick13);
  PacMan.collide(brick14);
  PacMan.collide(brick15);
  PacMan.collide(brick16);
  PacMan.collide(brick17);
  PacMan.collide(brick18);
  PacMan.collide(brick19);
  PacMan.collide(brick20);
  PacMan.collide(brick21);
  PacMan.collide(brick22);
  PacMan.collide(brick23);
  PacMan.collide(brick24);
  PacMan.collide(brick25);
  PacMan.collide(brick26);
  PacMan.collide(brick27);

    border1.display();
    PacManControl();
    GhostBounceOff();
    heartLives();
    coinScore();
    console.log(EatDots);
    drawSprites();  
} else{
  fill("red");
  textSize(30);
  text("CONGRATULATIONS YOUR WON!!!",395,280);
} 

  
}

function coinScore() {
  
    for (var i = 0;i<TotDots;i++)
   {
    //console.log("check1" + pills[i]);
    if (pills[i] != undefined && pills[i].collide(PacMan))
    {
      //console.log("check" + pills[i]);
      pills[i].destroy();
      score = score + 20;
      EatDots++;
    }
    if(pills[i].length == 0){
      text("CONGRATULATIONS YOUR WON!!!",395,280);
    }
   }
}  

function Boxdestroy() {
    border1.destroy();
    border2.destroy();
    border3.destroy();
    border4.destroy();
}

//  function changeDirection() {

//       direction = Math.floor(Math.random() * (4) + 1)

//      if (direction === 1) {
//          return 0;
//      } else if (direction === 2) {
//          return -90;
//      } else if (direction === 3) {
//          return 180;
//      } else {
//          return 90
//      }
//  }

