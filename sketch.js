var PLAY=1;
var END=0;
var gamestates=1;
var monkey , i_monkey
var i_bana,bana;
var i_ground,ground;
var survival=0;
var banas=0;
var i_rock,rock;

function preload(){
  
  
  i_monkey =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  i_ground=loadImage("Ground_PNG_Clip_Art_Image.png")
  i_bana = loadImage("banana.png");
  i_rock = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  ground=createSprite(250,450,500,20)
   ground.shapeColor=("lawngreen")
  ground.addImage("coding",i_ground)
 ground.scale=0.2;
  
  monkey=createSprite(50,370);
  monkey.addAnimation("coding",i_monkey);
  monkey.scale=0.12;
  
 ground.setCollider("rectangle",100,500);
  ground.debug=false;
  monkey.debug=false;
  
 
  rocks = new Group();
  banaas = new Group();
}


function draw() {
background ("aqua")
console.log(monkey.y)
   if(gamestates===PLAY){
  survival= survival + Math.round(getFrameRate()/60);
 ground.velocityX=-25;
  if(ground.x<0){
    ground.x=250
  }
 if(keyDown("space")&&monkey.y>=302){
    monkey.velocityY=-4;
  }
 monkey.velocityY=monkey.velocityY+0.1;
  monkey.collide(ground)
 
  if(monkey.isTouching(banaas)){
    banaas.destroyEach();
    banas=banas+1
     }
      if(monkey.isTouching(rocks)){
       gamestates = END ;     
         }  
   }
      else if(gamestates === END){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    rocks.setVelocityXEach(0);
    banaas.setVelocityXEach(0);
    textSize(50);
    fill("blue");
    text("Game Over!!",120,250);
    banaas.destroyEach();
   rocks.setLifetimeEach(-1);
    banaas.setLifetimeEach(-1);
   
  }

  drawSprites();
  spawnBananas();
  spawnrock();
  textSize(30);
  fill("violet")
  text("Survival Time:"+survival,200,30)
  textSize(30)
  fill("Orange")
  text("Bananas:"+banas,20,30)
}
function spawnBananas(){
  if (frameCount % 60 === 0) {
    var bana = createSprite(600,120,40,10);
    bana.y = Math.round(random(200,300));
    bana.addImage(i_bana);
    bana.scale = 0.1;
    bana.velocityX = -10;
  banaas.add(bana);
  }
}

function spawnrock() {
  
  if (frameCount % 100 === 0) {
    var rock = createSprite(370,0,40,10);
    rock.y = Math.round(random(379,380));
    rock.addImage(i_rock);
    rock.scale = 0.1;
    rock.velocityX = -10;
    rocks.add(rock);
  }
  }
