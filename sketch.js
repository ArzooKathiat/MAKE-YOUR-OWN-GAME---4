
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, backgroundImage;
var wall,wall2, wallImg;
var obsruction, obstructionImg;
var player,playerImg;
var walkFront, walkBack,backStop, walkLeft, walkRight;
var ground, groundImg;
var exit, exitImg;
var shadow;
var gemD1,gemD2,gemD3,gemD4,gemD5,gemD6, gemImg;
var gem2a,gem2b,gem2c, gem2Img;
var enemy1,enemy2,enemy3,enemy4,enemy5, enemyImg;
var goUp,goUpImg, goDown,goDownImg, goLeft,goLeftImg, goRight,goRightImg;
var hit , hitImg;
var gameState = 0;


function preload()
{
	enemyImg = loadImage("images/enemyWalk.png");
	backgroundImage = loadImage("../images/background.png")
	
	wallImg = loadImage("../images/wallStone_fence.png")
	obstructionImg = loadImage("../images/wallBreakable.png")
	playerImg= loadImage("../images/idle.png")
	groundImg = loadImage("../images/ground.png")
	exitImg = loadImage("../images/groundExit.png")
	walkFront = loadImage("../images/walk.png");
	walkRight = loadImage("../images/rightWalk.png");
	walkBack = loadImage("../images/backwalk.png");
	backStop = loadImage("../images/back.png");
	walkLeft = loadImage("../images/leftWalk.png");
	gemImg = loadImage("../images/gem1.png");
	gem2Img = loadImage("../images/gem2.png");
	goUpImg = loadImage("../images/upButton.png");
	goDownImg = loadImage("../images/downButton.png");
	goRightImg = loadImage("../images/rightButton.png");
	goLeftImg = loadImage("../images/leftButton.png");
	hitImg = loadImage("../images/hit.png");

}

function setup() {

	canvas = createCanvas(windowWidth,windowHeight);
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


//create maze walls
	obstruction = createSprite(85,280,50,50)
	obstruction.addImage(obstructionImg)

	obstruction = createSprite(570,270,50,50)
	obstruction.addImage(obstructionImg)
	

 shadow = createSprite(1190,460,100,100)
shadow.shapeColor = "#7E481C"

//create player
	player= createSprite(100,100,10,10)
    player.addImage(playerImg)
	player.velocityY = 0;
	player.velocityX = 0;

	
	//create gems
	gemD1 = createSprite(200,100,1,1)
	gemD1.addImage(gemImg)

	gemD2 = createSprite(200,400,20,20)
	gemD2.addImage(gemImg)

	gemD3 = createSprite(600,100,20,20)
	gemD3.addImage(gemImg)

	gemD4 = createSprite(600,400,20,20)
	gemD4.addImage(gemImg)

	gemD5 = createSprite(700,270,20,20)
	gemD5.addImage(gemImg)

	gemD6 = createSprite(800,95,20,20)
	gemD6.addImage(gemImg)

	//create more gems
	gem2a = createSprite(570,320,20,20)
	gem2a.addImage(gem2Img)

	gem2b= createSprite(770,380,20,20)
	gem2b.addImage(gem2Img)

	gem2b = createSprite(230,180,20,20)
	gem2b.addImage(gem2Img)

	gem2c = createSprite(1100,170,20,20)
	gem2c.addImage(gem2Img)

	//create enemies
	enemy1 = createSprite(900,400,20,20)
	enemy1.addImage(enemyImg);
	
	enemy2 = createSprite(950,190,20,20)
	enemy2.addImage(enemyImg);

	enemy3 = createSprite(300,300,20,20)
	enemy3.addImage(enemyImg);

	enemy4 = createSprite(530,170,20,20)
	enemy4.addImage(enemyImg);

	enemy5 = createSprite(130,370,20,20)
	enemy5.addImage(enemyImg);

	
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);


 
	exit = createSprite(1165,450,40,40)
	exit.addImage(exitImg)

	//make maze walls
	for (var i = 85; i < 150; i=i+50) {
		obstruction = createSprite(i,280,50,i+10)
		obstruction.addImage(obstructionImg)
				
		}

			
		for (var i = 300; i < 500; i=i+50) {
			obstruction = createSprite(i,400,50,i+10)
			obstruction.addImage(obstructionImg)
					
			}
	 
		for (var i = 400; i < 500; i=i+50) {
			obstruction = createSprite(500,i,i+10,50)
			obstruction.addImage(obstructionImg)
					
			}

			for (var i = 400; i < 500; i=i+50) {
				obstruction = createSprite(700,i,i+10,50)
				obstruction.addImage(obstructionImg)
						
				}

				for (var i = 1000; i < 10000; i=i+50) {
					obstruction = createSprite(i,280,50,i+10)
					obstruction.addImage(obstructionImg)
							
					}

for (var i = 1000; i < 1500; i=i+50) {
obstruction = createSprite(i,110,50,i+10)
obstruction.addImage(obstructionImg)
							
					}

					for (var i = 100; i < 200; i=i+50) {
						obstruction = createSprite(700,i,i+10,50)
						obstruction.addImage(obstructionImg)
								
						}




						for (var i = 100; i < 200; i=i+50) {
							obstruction = createSprite(450,i,i+10,50)
							obstruction.addImage(obstructionImg)
									
							}

							for (var i = 300; i < 500; i=i+50) {
								obstruction = createSprite(i,200,50,i+10)
								obstruction.addImage(obstructionImg)
										
								}	

								for (var i = 700; i < 850; i=i+50) {
									obstruction = createSprite(i,200,50,i+10)
									obstruction.addImage(obstructionImg)
											
						
								}
								
								for (var i = 200; i < 350; i=i+50) {
									obstruction = createSprite(850,i,i+10,50)
									obstruction.addImage(obstructionImg)
											
									}
								

  //boundary creation
  for (var i = 0; i < 1500; i=i+50) {
	wall = createSprite(i,20,i+10,50)
	wall.addImage(wallImg)

	}

	for (var i = 70; i < 500; i=i+50) {
	wall = createSprite(20,i,60,i+10)
	wall.addImage(wallImg)
			
	}
	
	for (var i = 70; i < 500; i=i+50) {
	wall = createSprite(1250,i,60,i+10)
	wall.addImage(wallImg)
				
	}

	for (var i = 0; i < 1500; i=i+50) {
	wall = createSprite(i,500,i+10,50)
	wall.addImage(wallImg)
					
	}
//buttons

	goUp = createSprite(500,500,10,10)
	goUp.addImage(goUpImg);
	goUp.scale = 0.3

	goDown = createSprite(600,500,10,10)
	goDown.addImage(goDownImg);
	goDown.scale = 0.3

	goLeft = createSprite(700,500,10,10)
	goLeft.addImage(goLeftImg);
	goLeft.scale = 0.3

	goRight = createSprite(800,500,10,10)
	goRight.addImage(goRightImg);
	goRight.scale = 0.3

//player movement
  if(keyDown(UP_ARROW)){
	player.velocityY = -5;
	player.addImage(walkBack);
  }
  if(keyWentUp(UP_ARROW)){
	player.velocityY = 0;
	player.addImage(backStop);
  }

  if(keyDown(DOWN_ARROW)){
	player.velocityY = 5;
	player.addImage(walkFront);
  }
  if(keyWentUp(DOWN_ARROW)){
	player.velocityY = 0;
	player.addImage(playerImg);
  }

  if(keyDown(LEFT_ARROW)){
	player.velocityX = -5;
	player.addImage(walkLeft);
  }
  if(keyWentUp(LEFT_ARROW)){
	player.velocityX = 0;
	player.addImage(playerImg);
  }

  if(keyDown(RIGHT_ARROW)){
	player.velocityX = 5;
	player.addImage(walkRight);
  }
  if(keyWentUp(RIGHT_ARROW)){
	player.velocityX = 0;
	player.addImage(playerImg);
  }
 
  //destroy enemies
  if(keyDown("K")&& player.isTouching(enemy1)){
	player.addImage(hitImg);
	enemy1.destroy();
  }
  if(keyWentUp("K")){
	  player.addImage(walkFront);
  }

  if(keyDown("K")&& player.isTouching(enemy2)){
	player.addImage(hitImg);
	enemy2.destroy();
  }
  if(keyWentUp("K")){
	  player.addImage(walkFront);
  }

  if(keyDown("K")&& player.isTouching(enemy3)){
	player.addImage(hitImg);
	enemy3.destroy();
  }
  if(keyWentUp("K")){
	  player.addImage(walkFront);
  }

  if(keyDown("K")&& player.isTouching(enemy4)){
	player.addImage(hitImg);
	enemy4.destroy();
  }
  if(keyWentUp("K")){
	  player.addImage(walkFront);
  }

  if(keyDown("K")&& player.isTouching(enemy5)){
	player.addImage(hitImg);
	enemy5.destroy();
  }
  if(keyWentUp("K")){
	  player.addImage(walkFront);
  }


 //collect gems
  if(player.isTouching(gemD1)){
	gemD1.destroy();
  }
  if(player.isTouching(gemD2)){
	gemD2.destroy();
  }
  if(player.isTouching(gemD3)){
	gemD3.destroy();
  }
  if(player.isTouching(gemD4)){
	gemD4.destroy();
  }
  if(player.isTouching(gemD5)){
	gemD5.destroy();
  }
  if(player.isTouching(gemD6)){
	gemD6.destroy();
  }

  if(player.isTouching(gem2a)){
	gem2a.destroy();
  }
  if(player.isTouching(gem2b)){
	gem2b.destroy();
  }
  if(player.isTouching(gem2c)){
	gem2c.destroy();
  }
 
  if(player.isTouching(exit)){
	  gameState = 1;
  }

  
  
  

	
  drawSprites();

  if(gameState === 1){
	textSize(20);
	fill("black")
	text("YOU WON!" ,500,300);
  }
 
}

