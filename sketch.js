var path,runner,road,run,left,right;
function preload(){
  //pre-load images
path=loadImage("path.png");
runner=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
}

function setup(){
  createCanvas(600,400);
  road=createSprite(296,200,100,100);
  road.addImage("roads",path);
  road.velocityY=5;
  run=createSprite(300,200,300,100);
  run.addAnimation("player",runner);
 
 left=createSprite(70,200,155,400);
 right=createSprite(524,200,155,400);
 left.visible=false;
 right.visible=false;
}

function draw() {

  background("black");
 run.x=World.mouseX
 
  if(road.y>450){
    road.y=road.height/4
  
   }

 run.collide(left);
 run.collide(right);
 drawSprites();
}
