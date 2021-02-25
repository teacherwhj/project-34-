
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var head, bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/2);

	
	engine = Engine.create();
	world = engine.world;

	head = new Roof(200,50,400,20);
	bob1 = new Bob(100,350);
	bob2 = new Bob(150,350);
	bob3 = new Bob(200,350);
	bob4 = new Bob(250,350);
	bob5 = new Bob(300,350);
	
	rope1 = new Rope(bob1.body,head.body,-100,0)
	rope2 = new Rope(bob2.body,head.body,-50,0)
	rope3 = new Rope(bob3.body,head.body,0,0)
	rope4 = new Rope(bob4.body,head.body,50,0)
	rope5 = new Rope(bob5.body,head.body,100,0)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  head.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function mouseDragged(){
	
		
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:70,y:-155});

}

