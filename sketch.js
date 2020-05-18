const Engine=Matter.js;
const World=Matter.js;
const Bodies=Matter.js;

var engine,world;
var raindrops;




function setup() {
  createCanvas(800,400);
  engine=Engine.create;
  world=Engine.world;
  raindrops=new RainDrops();
  raindrops.X=random(100,300);
  raindrops.Y=random(100,700);
  raindrops.width=10;
  raindrops.height=5;
}

function draw() {
  background(255,255,255);
  raindrops.display();
  drawSprites();
}