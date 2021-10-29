const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine, world;
var bg;
var snow = [];
var snow1;

function preload(){
  bg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(500,50);

  for (var count = 1; count <= 100; count++) 
    {
       var x = random(50,750);
       var y = random(50,350);
       snow.push(new Snow(x,y));
    }

}

function draw() {
  background(bg); 
  Engine.update(engine);
  snow1.display();

  for (var j = 0; j < snow.length; j++) {
    if(snow[j].body.position.y > 400){
      Matter.Body.setPosition(snow[j].body, {x:random(50,750),y:random(50,350)});
    }
    snow[j].display();
  }

  
}