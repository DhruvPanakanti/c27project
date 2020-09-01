
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.constraint

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rooof=new roof(600,50,600,20);
	bob1=new bob(700,500,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rooof.display();
  bob1.display();
  
  drawSprites();
 
}



