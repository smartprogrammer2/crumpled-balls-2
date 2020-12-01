
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var c1, c2, c3;
var paper;
var o1, o2, o3, o4;
var w1, w2, w3;
var d;

function preload()
{
	dustbinI = loadImage("dustbinImage.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//creating ground
	ground = new Ground(600, 650, 1200, 10);

	c1 = new Dustbin(900, 635, 200, 20);
	c2 = new Dustbin(830, 570, 20, 150);
	c3 = new Dustbin(970, 570, 20, 150);

	w1 = new Ground(30, 350, 40, 700);
	w2 = new Ground(1170, 350, 40, 700);
	w3 = new Ground(600, 30, 1400, 40)

	paper = new Paper(200, 100, 20);

	o1 = new Obstacle(600, 350, 100, 20);
	o2 = new Obstacle(300, 400, 100, 20);
	o3 = new Obstacle(700, 200, 20, 200);
	o4 = new Obstacle(400, 500, 20, 150);

	d = createSprite(900, 550, 20, 20);
	d.addImage(dustbinI);
	d.scale = 0.7;
	
	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  ground.display();

  c1.display();
  c2.display();
  c3.display();

  w1.display();
  w2.display();
  w3.display();
  o1.display();
  o2.display();
  o3.display();
  o4.display();

  paper.display();

  

  keyPressed();
  drawSprites();
 
}


function keyPressed() {
	if (keyDown("w")) {
		Body.applyForce(paper.body, paper.body.position, {x: paper.body.position.x, y: paper.body.position.y +5 })
	}
}
