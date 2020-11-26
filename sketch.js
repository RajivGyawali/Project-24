
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200,400,20)
	dustbin = new Dustbin(1000,760,200,20)
	leftdustbin = new Dustbin(895,720,20,100)
	rightdustbin = new Dustbin(1100,720,20,100)
	ground = new Ground(600,780,1200,20)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)

  paper.display();
  dustbin.display();
  ground.display();
  leftdustbin.display();
  rightdustbin.display();
 
}
function keyPressed(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:27,y:-40});
	}
}



