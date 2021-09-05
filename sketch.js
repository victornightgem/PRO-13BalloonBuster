var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
 
  //creating background
  /*
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 1.5;
  */
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
  var select_balloon = Math.round(random(1,4));

  textSize(20);
  text("Score: "+ score, 270, 30);
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    else if( select_balloon ==2){
      greenBalloon();
    }
    else if( select_balloon == 3){
      blueBalloon();
    }
    else{
      pinkBalloon();
    }
  }
 background(backgroundImage);

  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons

  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 4;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20,370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 150;
  blue.scale = 0.05;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20,370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 4;
  green.lifetime = 150;
  green.scale = 0.13;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20,370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 4;
  pink.lifetime = 150;
  pink.scale = 0.1;
}
