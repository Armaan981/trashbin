
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bar1,bar2,bar3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  paper = new Paper(750,680)
  bar1 = createSprite(200,-85,150,50)
  bar1 = createSprite(185,-70,50,150)
  bar1 = createSprite(210,-90,150,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

  drawSprites();
 
}

function keyPressed()
	{
if(keyCode === UP_ARROW)
{
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
	}
