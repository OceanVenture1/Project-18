  var garden,rabbit;
  var gardenImg,rabbitImg;
  var apple, appleImg;
  var leaf, leafImg;
  var rand, rand2;
  var life;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}


function setup(){
  
  createCanvas(windowWidth,windowHeight);
  
  // Moving background
  garden=createSprite(width/2,250);
  garden.scale = width/505;
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(width/2,height-20);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x=World.mouseX;
  rabbit.velocityX = 4;
  
    if(frameCount % 80 === 0){
        if(rand === 1){
          spawnApple();
        }
      else{
        spawnLeaves();
      }
      }

  rand = Math.round(random(1,2));
  rand2 = Math.round(random(1,2));

  drawSprites();
}

function spawnApple(){
  apple = createSprite(Math.round(random(50,width-50)),30,20,20);
  apple.velocityY = 4;
  apple.addImage(appleImg);
  apple.scale = 0.09;
  apple.depth = 1;
}

function spawnLeaves(){
  leaf = createSprite(Math.round(random(50,width-50)),30,20,20);
  leaf.velocityY = 4;
  leaf.addImage(leafImg);
  leaf.scale = 0.09;
  leaf.depth = 1;
}