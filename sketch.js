
// Renaming/(Alias) the modules of the library  -- NameSpacing
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

// Declaring a variable engine to hold the engine object
var engine,world;
var ground;
var ball;


function setup() {
  createCanvas(800,400);
  
  // Creating engine from create method/function of  Matter.Engine module
  engine = Engine.create();
  world= engine.world;

  //console.log(engine);

  // JSON -- Java script object notation
  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground);
 // console.log(ground)
 var ball_options = {
   restitution: 0.8
   
 }
 ball = Bodies.circle(400,50,15,ball_options);
 World.add(world,ball);
 console.log(ball);

}

function draw() {
  background("lightblue");  

  Engine.update(engine);

  // console.log(ground.position.x);
  // console.log(ground.position.y);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);
  
  
}