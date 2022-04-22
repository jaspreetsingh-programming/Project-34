const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;


var frog, frogImg, frogEat, froge;
var insect, insectImg;
var crown, crownImg;

var ground;

var backgroundImage;

















function preload(){
 
  backgroundImage = loadImage("background1.jpg");
  frogImg = loadImage("frog_2.png");
  frogEat = loadAnimation("frog_3.png");
  insectImg = loadImage("insect.png");
  crownImg = loadImage("crown.png");
}

function setup(){
 var canvas = createCanvas(700, 700);

 engine = Engine.create();
 world = engine.world;

 
 frog = createSprite(350, 600);
 frog.addImage(frogImg);

 insect = createSprite(100, 300);
 insect.addImage(insectImg);
 insect.size = 0.002;
 insect.velocityX= 5;

 crown = createSprite(350,frog.height );
 crown.addImage(crownImg);
 
  

 ground = new Ground(350, 650, 700, 100);





}


function draw(){
  background(backgroundImage);
  Engine.update(engine);

  ground.display();

  frog.setCollider("rectangle", 0, 0, frog.width, frog.height);  
 // frog.debug = true;

  crown.visible = false;
 
  if(keyDown("space")){
    frog.velocityY = -5;
  }

  
  if(insect.positionX > 350){
    insect.postion(100, 300);
  }
  
  
  if(frog.isTouching(insect)){
    
    
    
    
    textSize(80);
    insect.visible = false;
    crown.visible = true;
    frog.velocityY = 0;
    
    fill("white");
    text("!!!GOOD JOB!!!", 110, 200);
  
}



 
  drawSprites();
}