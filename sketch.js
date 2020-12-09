
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground, invisibleGround, groundImg;


function preload()
{
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png",     "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  groundImg = loadImage("ground2.png");
 
}

function setup()
{
  createCanvas(400,400);
  
  monkey =  createSprite(85,300,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200,305,400,10);
  ground.velocityX = ground.width/2;
  ground.addImage("ground",groundImg);
  
  invisibleGround = createSprite(200,310,400,10);
  invisibleGround.visible = false;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
  stroke("black");
  fill("black");
  textSize(20);
  
}

function draw() 
{
  background(250);
  
  text("Score : " +score,280,50);
  
  score = score + Math.round(frameRate()/60);
  
  if(keyDown("space"))  
    {
      monkey.velocityY = -8;
    }
  
  monkey.y = monkey.y + 8;
  ground.velocityX = -8;
  
  if (ground.x < 0)
    {
      ground.x = ground.width/2;
    }
  
 // console.log(monkey.y);
    
  
  monkey.collide(invisibleGround);
  
  spawnFood();
  spawnObstacle();
   
  drawSprites();
}

function spawnFood()
{
  if(frameCount % 80 === 0)
    {
      banana = createSprite(200,100,10,10);
      banana.y = Math.round(random(120,200));
      banana.addImage("banana",bananaImage);
      banana.scale = 0.1;
      banana.lifetime = 200;
      banana.velocityX = -8;
      FoodGroup.add(banana);
    }
}

function spawnObstacle()
{
  if(frameCount % 300 === 0)
    {
      obstacle = createSprite(400,285,10,10);
      obstacle.addImage("obstacle",obstacleImage);
      obstacle.scale = 0.15;
      obstacle.lifetime = 400;
      obstacleGroup.add(obstacle);
      obstacle.velocityX = -7;
    }
}



